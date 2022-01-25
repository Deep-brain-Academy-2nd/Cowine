from flask import request, jsonify
from flask_restx import Resource, Api, Namespace, fields, reqparse
import json
import numpy as np
import cv2
import pandas as pd
from matplotlib import pyplot as plt
from sklearn.cluster import KMeans
from collections import Counter
from flask import g
from recosys.models.rating import rating as RatingModel
from werkzeug import security
from itertools import product

wineEval = Namespace('wineEval', description='와인 평점 받기')

# rating = wineEval.model('Rating',{
#     'userId': fields.String(required=True, description='유저 고유 번호'),
#     'wineCode': fields.String(required=True, description='와인코드'),
#     'rating': fields.Integer(required=True, description='평점'),
# })
post_parser = reqparse.RequestParser()
post_parser.add_argument('userId', required=True, help='유저 고유 번호')
post_parser.add_argument('wineCode', required=True, help='와인코드')
post_parser.add_argument('rating', required=True, help='평점')

def get_cosine_similarity(u1,u2):
    mask=np.isfinite(u1) & np.isfinite(u2)
    u=u1[mask]
    v=u2[mask]
    uvdot=(u*v).sum()
    norm1=(u**2).sum()
    norm2=(v**2).sum()
    score = uvdot/np.sqrt(norm1*norm2)
    return score

def get_pearson_correlation(u, v, epsilon=0.0001):
    mask = (np.isfinite(u) & np.isfinite(v))
    
    u, v = u[mask], v[mask]
    
    u_dev, v_dev = u-u.mean(), v-v.mean()
    u_var, v_var = (u_dev**2).sum(), (v_dev**2).sum()
    
    
    nominator = np.dot(u_dev, v_dev)
    denominator = np.sqrt(u_var * v_var)
    
    pearson_correlation = nominator / (denominator + epsilon)
    
    return pearson_correlation   
def get_cosine_similarity_table(ratings):
    index_pair = list(product(ratings.index,repeat=2))
    similarity_list=[]
    for u1,u2 in index_pair:
        u,v =ratings.loc[u1],ratings.loc[u2]
        score=get_cosine_similarity(u,v)
        similarity= { 'u':u1,
                      'v':u2,
                      'score':score,}
        similarity_list.append(similarity)
    
    similarity_list=pd.DataFrame(similarity_list)
    similarity_table=pd.pivot_table(similarity_list,index="u",columns="v",values="score")
    return similarity_table

def predict_rating(userId,wineCode,ratings,similarity_table):
    neighbors_ratings = ratings[wineCode].drop(index=userId)
    neighbors_similarity = similarity_table[userId].drop(index=userId)
    nominator=(neighbors_ratings * neighbors_similarity).sum()
    denominator=neighbors_similarity.sum()
    score=nominator/denominator
    return score

def predict_rating_table(ratings,similarity_table):
    rating_combinations=list(product(ratings.index,ratings.columns))
    rating_list=[]
    for userId,wineCode in rating_combinations:
        rating=predict_rating(userId,wineCode,ratings,similarity_table)
        rating_predict={
            'user':userId, 'wine':wineCode, 'rating':rating
        }
        rating_list.append(rating_predict)
    
    rating_list=pd.DataFrame(rating_list)
    rating_table=rating_list.pivot_table(index='user',columns='wine',values='rating')
    rating_table=rating_table[ratings.isnull()]
    return rating_table

def predict_wine(userId,rating_table, k=1):
    prediction_list = rating_table.loc[userId].sort_values(ascending=False)
    prediction_list=prediction_list.head(k).index
    return prediction_list

def predict_user(wineCode,rating_table, k=1):
    prediction_list=rating_table[wineCode].sort_values(ascending=False)
    print(prediction_list)
    prediction_list=prediction_list.head(k).index
    return prediction_list

def get_pearson_correlation_table(ratings, epsilon = 0.0001):
    
    index_pair = list(product(ratings.index, repeat=2))
    similarity_list = []

    for u_name, v_name in index_pair:
        
        u = ratings.loc[u_name]
        v = ratings.loc[v_name]
    
        score = get_pearson_correlation(u, v)

        similarity = {
            'u': u_name,
            'v': v_name,
            'score': score
        }
        
        similarity_list.append(similarity)  
    
    similarity_list = pd.DataFrame(similarity_list)
    similarity_table= pd.pivot_table(similarity_list, index="u", columns="v", values="score")

    return similarity_table


def get_nearest_neighbors(userId, wineCode, ratings, similarity, k):

    max_neighbors_num = similarity.shape[0] - 1
    k = min(k, max_neighbors_num)
    
    neighbors_similarity = similarity[userId].drop(index=userId)
    neighbors_ratings = ratings[wineCode].drop(index=userId)
    
    # 해당 상품에 평점을 준 적이 없으면 제외
    neighbors_similarity = neighbors_similarity[neighbors_ratings.notnull()]
    neighbors_ratings = neighbors_ratings[neighbors_ratings.notnull()]

    if neighbors_ratings.shape[0] == 0:
        return neighbors_ratings.index
        
    neighbors_similarity = neighbors_similarity.sort_values(ascending=False)
    candidates = neighbors_similarity[neighbors_similarity > 0]

    if (candidates.shape[0]) == 0:
        nearest_neighbors = neighbors_similarity.head(1)
    else:
        nearest_neighbors = candidates.head(k)

    return nearest_neighbors.index
# 특정 사용자의 상품의 평점을 예측

def user_rating_predict(userId, wineCode, ratings, similarity, k, epsilon=0.0001):

    nearest_neighbors = get_nearest_neighbors(userId, wineCode, ratings, similarity, k)
    
    if len(nearest_neighbors) == 0:
        return np.nan
    
    nn_similarity = similarity.loc[userId, nearest_neighbors]
    nn_ratings = ratings.loc[nearest_neighbors, wineCode]
    
    # 이웃들이 예측하려는 상품에 내린 평점의 평균.
    neighbors_rating_mean = nn_ratings.mean()
    # 예측하려는 사용자가 해당 해당상품에 내린 평점의 평균.  
    u_rating_mean = ratings.loc[userId].mean()
    

    nominator = np.dot(nn_similarity,(nn_ratings-neighbors_rating_mean))
    denominator = nn_similarity.sum()
    prediction = u_rating_mean + nominator / (denominator + epsilon)
    
    return prediction

# 사용자 기반, 상품 기반 기법 모두 가능
def ratings_predict(ratings, kind='user', k=2, epsilon=0.0001):
    
    if kind == 'wine':
        ratings = ratings.T
    
    similarity = get_pearson_correlation_table(ratings, epsilon)
    prediction_list = []

    
    for u_name, v_name in list(product(ratings.index, ratings.columns)):
        rating = user_rating_predict(u_name, v_name, ratings, similarity, k, epsilon)
        prediction = {
            'u' : u_name,
            'v' : v_name,
            "rating" : rating
        }
        prediction_list.append(prediction)
        
    result = pd.DataFrame(prediction_list).pivot_table(index='u', columns='v', values='rating')
    result = result[ratings.isnull()]
        
    if kind == 'wine':
        return result.T

    return result


def exec(userId):
    data = pd.read_csv('./recosys/apis/data/user.csv',encoding='CP949')
    ratings = data.pivot_table(index='userId',columns='wineCode',values='rating')
    index_pair = list(product(ratings.index,repeat=2))
    similarity_table=get_cosine_similarity_table(ratings)
    rating_table=predict_rating_table(ratings,similarity_table)
    ret = predict_wine(userId,rating_table,k=3).tolist()
    return ret
    
@wineEval.route('/mypage')
class Recommendation(Resource):
    def post(self):
        input_id= request.form['userId']
        ret = exec(input_id)
        # ret = {"a":1}
        return jsonify(ret)

@wineEval.expect(post_parser)
@wineEval.route('')
class getData(Resource):

    # @wineEval.marshal_list_with(rating, skip_none=True)
    def get(self):
  
        
        # g.db.add(
        #         RatingModel(userId=input_id,
        #             wineCode=code_wine,
        #             score = input_score)
        #     )
        
        # g.db.commit()
        
        args = post_parser.parse_args()
        rating = RatingModel(

            # userId = input_id,
            # wineCode = input_score,
            # rating = input_score


            userId = args['userId'],
            wineCode = args['wineCode'],
            rating = args['rating']
        )

        g.db.add(rating)
        g.db.commit()
        
        return 201


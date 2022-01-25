from sys import prefix
from flask import Blueprint
from flask_restx import Api
from recosys.apis.evaluation import wineEval

blueprint = Blueprint('api',__name__)
api = Api(blueprint, version='1.0',prefix='/recosys', title='Analytics API', doc='/recosys/docs', description='A archdica Analytics API')


# Add namespace
evaluation = api.add_namespace(wineEval, '/evaluation' )

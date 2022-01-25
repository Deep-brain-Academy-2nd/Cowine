import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import StarRating from "../components/StarRating";

const Data = [
  {
    _id: "61ec2a29f2876fe603f159f9",
    wine_code: "170389",
    wine_name: "테누사 일 팔라지오, 메시지 인 어 보틀 화이트",
    img_url:
      "https://wine21.speedgabia.com/WINE_MST/TITLE/0170000/W0170389.png",
    badge: "화이트",
    sugar_content: "1",
    acidity: "3",
    body: "2",
    tannin: "1",
    producer: "테누타 일 팔라지오 Tenuta Il Palagio",
    nation: "이탈리아(Italy)",
    production_area: "토스카나(Toscana)",
    main_varieties: "베르멘티노 (Vermentino) 100%",
  },
  {
    _id: "61ec2a29f2876fe603f159f9",
    wine_code: "170389",
    wine_name: "테누사 일 팔라지오, 메시지 인 어 보틀 화이트",
    img_url:
      "https://wine21.speedgabia.com/WINE_MST/TITLE/0170000/W0170389.png",
    badge: "화이트",
    sugar_content: "1",
    acidity: "3",
    body: "2",
    tannin: "1",
    producer: "테누타 일 팔라지오 Tenuta Il Palagio",
    nation: "이탈리아(Italy)",
    production_area: "토스카나(Toscana)",
    main_varieties: "베르멘티노 (Vermentino) 100%",
  },
  {
    _id: "61ec2a29f2876fe603f159f9",
    wine_code: "170389",
    wine_name: "테누사 일 팔라지오, 메시지 인 어 보틀 화이트",
    img_url:
      "https://wine21.speedgabia.com/WINE_MST/TITLE/0170000/W0170389.png",
    badge: "화이트",
    sugar_content: "1",
    acidity: "3",
    body: "2",
    tannin: "1",
    producer: "테누타 일 팔라지오 Tenuta Il Palagio",
    nation: "이탈리아(Italy)",
    production_area: "토스카나(Toscana)",
    main_varieties: "베르멘티노 (Vermentino) 100%",
  },
  {
    _id: "61ec2a29f2876fe603f159f9",
    wine_code: "170389",
    wine_name: "테누사 일 팔라지오, 메시지 인 어 보틀 화이트",
    img_url:
      "https://wine21.speedgabia.com/WINE_MST/TITLE/0170000/W0170389.png",
    badge: "화이트",
    sugar_content: "1",
    acidity: "3",
    body: "2",
    tannin: "1",
    producer: "테누타 일 팔라지오 Tenuta Il Palagio",
    nation: "이탈리아(Italy)",
    production_area: "토스카나(Toscana)",
    main_varieties: "베르멘티노 (Vermentino) 100%",
  },
  {
    _id: "61ec2a29f2876fe603f159f9",
    wine_code: "170389",
    wine_name: "테누사 일 팔라지오, 메시지 인 어 보틀 화이트",
    img_url:
      "https://wine21.speedgabia.com/WINE_MST/TITLE/0170000/W0170389.png",
    badge: "화이트",
    sugar_content: "1",
    acidity: "3",
    body: "2",
    tannin: "1",
    producer: "테누타 일 팔라지오 Tenuta Il Palagio",
    nation: "이탈리아(Italy)",
    production_area: "토스카나(Toscana)",
    main_varieties: "베르멘티노 (Vermentino) 100%",
  },
  {
    _id: "61ec2a29f2876fe603f159f9",
    wine_code: "170389",
    wine_name: "테누사 일 팔라지오, 메시지 인 어 보틀 화이트",
    img_url:
      "https://wine21.speedgabia.com/WINE_MST/TITLE/0170000/W0170389.png",
    badge: "화이트",
    sugar_content: "1",
    acidity: "3",
    body: "2",
    tannin: "1",
    producer: "테누타 일 팔라지오 Tenuta Il Palagio",
    nation: "이탈리아(Italy)",
    production_area: "토스카나(Toscana)",
    main_varieties: "베르멘티노 (Vermentino) 100%",
  },
  {
    _id: "61ec2a29f2876fe603f159f9",
    wine_code: "170389",
    wine_name: "테누사 일 팔라지오, 메시지 인 어 보틀 화이트",
    img_url:
      "https://wine21.speedgabia.com/WINE_MST/TITLE/0170000/W0170389.png",
    badge: "화이트",
    sugar_content: "1",
    acidity: "3",
    body: "2",
    tannin: "1",
    producer: "테누타 일 팔라지오 Tenuta Il Palagio",
    nation: "이탈리아(Italy)",
    production_area: "토스카나(Toscana)",
    main_varieties: "베르멘티노 (Vermentino) 100%",
  },
  {
    _id: "61ec2a29f2876fe603f159f9",
    wine_code: "170389",
    wine_name: "테누사 일 팔라지오, 메시지 인 어 보틀 화이트",
    img_url:
      "https://wine21.speedgabia.com/WINE_MST/TITLE/0170000/W0170389.png",
    badge: "화이트",
    sugar_content: "1",
    acidity: "3",
    body: "2",
    tannin: "1",
    producer: "테누타 일 팔라지오 Tenuta Il Palagio",
    nation: "이탈리아(Italy)",
    production_area: "토스카나(Toscana)",
    main_varieties: "베르멘티노 (Vermentino) 100%",
  },
  {
    _id: "61ec2a29f2876fe603f159f9",
    wine_code: "170389",
    wine_name: "테누사 일 팔라지오, 메시지 인 어 보틀 화이트",
    img_url:
      "https://wine21.speedgabia.com/WINE_MST/TITLE/0170000/W0170389.png",
    badge: "화이트",
    sugar_content: "1",
    acidity: "3",
    body: "2",
    tannin: "1",
    producer: "테누타 일 팔라지오 Tenuta Il Palagio",
    nation: "이탈리아(Italy)",
    production_area: "토스카나(Toscana)",
    main_varieties: "베르멘티노 (Vermentino) 100%",
  },
  {
    _id: "61ec2a29f2876fe603f159f9",
    wine_code: "170389",
    wine_name: "테누사 일 팔라지오, 메시지 인 어 보틀 화이트",
    img_url:
      "https://wine21.speedgabia.com/WINE_MST/TITLE/0170000/W0170389.png",
    badge: "화이트",
    sugar_content: "1",
    acidity: "3",
    body: "2",
    tannin: "1",
    producer: "테누타 일 팔라지오 Tenuta Il Palagio",
    nation: "이탈리아(Italy)",
    production_area: "토스카나(Toscana)",
    main_varieties: "베르멘티노 (Vermentino) 100%",
  },
];
const Evaluation = () => {
  return (
    <Base>
      <Text>와인 평가페이지</Text>
      <RecommendationBox>
        {Data.slice(0, 8).map((data) => (
          <Card>
            <WineImage src={data.img_url} />
            <SmText>{data.wine_name}</SmText>
            <EvaluationBox>
              <StarRating />
            </EvaluationBox>
          </Card>
        ))}
      </RecommendationBox>
    </Base>
  );
};

export default Evaluation;

const Base = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Text = styled.div`
  position: absolute;
  top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #222;
`;

const SmText = styled.div`
  position: absolute;
  bottom: 80px;
  font-size: 12px;
  font-weight: 500;
`;

const RecommendationBox = styled.div`
  position: absolute;
  top: 50px;
  width: 1440px;
  height: 800px;
  background: #e4e5e9;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Card = styled.div`
  position: relative;
  box-sizing: border-box;
  flex-shrink: 1;
  width: 300px;
  margin: 0 30px;
  height: 300px;
  background: white;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  border-radius: 10px;
`;

const WineImage = styled.div`
  background-image: url(${(props) => props.src});
  margin-top: 30px;
  background-size: cover;
  width: 100px;
  height: 150px;
  /* background: gray; */
`;

const EvaluationBox = styled.div`
  position: absolute;
  bottom: 50px;
`;

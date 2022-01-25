import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";

const WineDatas = [
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

const WinePage = () => {
  const [wines, setWines] = useState([]);

  return (
    <Base>
      <Container fluid="md">
        <Row>
          {WineDatas.map((data) => (
            <Col md={4} style={{ marginTop: "30px" }}>
              <Card
                onClick={() => {
                  console.log("김치");
                }}
                style={{ maxWidth: "300px" }}
              >
                <Item>
                  <ImgBox src={data.img_url} alt="와인" />
                  <Name>{data.wine_name}</Name>
                </Item>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Base>
  );
};

export default WinePage;

const Base = styled.div`
  /* margin-top: 20px; */
  width: 1200px;
  height: 800px;
  display: flex;
`;

const Item = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  cursor: pointer;
`;

const Name = styled.div`
  position: absolute;
  left: 30px;
  bottom: 10px;
  width: 250px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  font-size: 12px;
`;

const ImgBox = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  /* background-position: center; */
  width: 100px;
  height: 200px;
`;

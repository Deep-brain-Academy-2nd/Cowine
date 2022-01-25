import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import RatingSIze from "../components/Rating";
import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider";
import SwipeToSlide from "../components/Slider";
import ProductSlider from "../components/Slider";

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

function MainPage() {
  // // 랜딩페이지에 들어오자마자 get request를 서버로 보냄. endingpoint는 /api/hello
  // useEffect(() => {
  //   // endpoint를 서버로 보냄.
  //   axios
  //     .get("/api/hello")
  //     // 응답이오면 console창에서 보여줍니다.
  //     .then((response) => console.log(response.data));
  // }, []);

  return (
    <>
      <Wrapper>
        <WinePhoto src="images/wine_photo_2.png">
          <Text>Enjoy Wine Cowine</Text>
        </WinePhoto>
      </Wrapper>

      {/* <Slider>
          {Data.map((data) => (
            <img src={data.img_url} key={data._id} alt="이미지" />
          ))}
        </Slider> */}
      <Wrapper>
        <SliderDiv>
          <ProductSlider data={Data} />
        </SliderDiv>
      </Wrapper>
      <Wrapper>
        <SliderDiv>
          <ProductSlider data={Data} />
        </SliderDiv>
      </Wrapper>
    </>
  );
}

export default MainPage;

const Wrapper = styled.div`
  position: relative;
  width: 1440px;
  height: 450px;
  display: flex;
  justify-content: center;
  flex-direction: "column";
`;

const WinePhoto = styled.div`
  position: absolute;
  top: 20px;
  width: 1200px;
  height: 400px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #fff;
`;

const Text = styled.div`
  font-family: "Neonderthaw";
  font-size: 60px;
`;

const SliderDiv = styled.div`
  position: absolute;
  width: 1200px;
  height: 300px;
  background: #fff;
`;

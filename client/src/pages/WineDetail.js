import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";

const WineDetail = () => {
  return (
    <Base>
      {
        <>
          {" "}
          <Image src="" />
          <WineInfoBox>
            <WineName>디아를로 카페르네 소비뇽</WineName>
            <LikeButton></LikeButton>
            <Countury>생산지: 이탈리아</Countury>
            <Badge>종류: 레드</Badge>
            <EvaluationBox>
              <div>산도: 3</div>
              <div>당도: 2</div>
              <div>바디: 1</div>
              <div>타닌: 5</div>
            </EvaluationBox>
            <Producer>생산자: 테누타 일 팔라지오</Producer>
            <ProductionArea>생산지역: 토스카나</ProductionArea>
          </WineInfoBox>
        </>
      }
    </Base>
  );
};

export default WineDetail;

const Base = styled.div`
  position: relative;
  width: 1440px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.div`
  position: absolute;
  top: 50px;
  left: 200px;
  width: 350px;
  height: 450px;
  background-size: cover;
  border: 1px solid #222;
  border-radius: 10px;
`;

const WineInfoBox = styled.div`
  position: absolute;
  top: 30px;
  right: 250px;
  width: 500px;
  height: 500px;
  border: 1px solid #222;
  border-radius: 5px;
`;

const LikeButton = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  border: 1px solid #222;
  width: 50px;
  height: 50px;
`;

const WineName = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  font-weight: 700;
  font-size: 18px;
  width: 350px;
  height: 30px;
`;

const Countury = styled.div`
  position: absolute;
  top: 100px;
  left: 50px;
  width: 300px;
  height: 30px;
  font-size: 14px;
  /* border-bottom: 1px solid lightgray; */
`;

const Badge = styled.div`
  position: absolute;
  top: 150px;
  left: 50px;
  width: 300px;
  height: 30px;
  font-size: 14px;
  /* border-bottom: 1px solid lightgray; */
`;

const EvaluationBox = styled.div`
  position: absolute;
  bottom: 260px;
  left: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 30px;
  font-size: 14px;
`;

const Producer = styled.div`
  position: absolute;
  bottom: 180px;
  width: 300px;
  height: 30px;
  left: 50px;
  font-size: 14px;
`;

const ProductionArea = styled.div`
  position: absolute;
  bottom: 100px;
  width: 300px;
  height: 30px;
  left: 50px;
  font-size: 14px;
`;

const SimilarWineBox = styled.div`
  position: absolute;
  width: 80%;
  height: 150px;
  border: 1px solid #222;
`;

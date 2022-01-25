import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const NotFound = () => {
  return (
    <Wrapper>
      <Typography variant="h4">요청하신 페이지를 찾을 수 없습니다.</Typography>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

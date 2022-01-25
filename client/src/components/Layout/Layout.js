import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header";

const Layout = ({ children }) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const updateSize = () => {
      setHeight(window.innerHeight);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  });

  return (
    <Wrapper>
      <Header />
      <Body height={height}>{children}</Body>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div``;

const Body = styled.div`
  /* min-height: ${(props) => `${props.height}px`}; */
  margin-top: 64px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

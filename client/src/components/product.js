import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductCard = ({ imgSrc, data }) => {
  return (
    <>
      <Card
        style={{
          width: "250px",
          height: "350px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
          boxSizing: "border-box",
        }}
      >
        <Card.Img
          src={imgSrc}
          style={{
            width: "130px",
            height: "160px",
          }}
        />
        <Card.Body
          style={{
            width: "250px",
            height: "320px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: "1px solid lightgray",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <Card.Title
            style={{
              fontSize: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span>와인명</span>
            <span
              style={{
                marginTop: "3px",
                fontSize: "12px",
                width: "160px",
                height: "30px",
                color: "#C32E61",
              }}
            >
              {data.wine_name}
            </span>
          </Card.Title>
          <Card.Text
            className="m-1"
            style={{
              fontSize: "14px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span>와인생산자</span>
            <span style={{ marginTop: "3px" }}>헤이</span>
          </Card.Text>
          <Card.Text
            className="m-1"
            style={{
              fontSize: "14px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            와인
          </Card.Text>

          {/* <Link to={`/company/${this.props}`}> */}
          <Button variant="secondary">와인상세보기</Button>
          {/* </Link> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;

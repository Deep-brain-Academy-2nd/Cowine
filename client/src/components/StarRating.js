import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const StarRating = () => {
  const [rating, setRating] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, idx) => {
        const ratingValue = idx + 1;

        return (
          <label>
            <Input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
              }}
            />
            <FaStar
              style={{ cursor: "pointer", transition: "color 200ms" }}
              color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
              size={14}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;

const Input = styled.input`
  display: none;
`;

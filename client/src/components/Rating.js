import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function RatingSIze() {
  const [rating, setRating] = useState(null);

  return (
    <Stack spacing={1}>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
    </Stack>
  );
}

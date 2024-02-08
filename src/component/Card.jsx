import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const ChegermaCard = ({
  children,
  Images,
  shortName,
  fullName,
  oldPrice,
  newPrice,
  chegiram,
  skidka,
  rating,
  onClickCard,
  zakazlar,
  sotuvchi,
}) => {
  return (
    <div
      className="Chegerma-Card"
      onClick={() => {
        onClickCard({
          Images,
          shortName,
          fullName,
          oldPrice,
          newPrice,
          chegiram,
          skidka,
          rating,
          zakazlar,
          sotuvchi,
        });
      
      }}
    >
      <div className="img-div">
        <img src={Images[0]} alt="" />
        <img src="heart.png" alt="" />
      </div>
      <h2>{shortName}</h2>
      <Box
        sx={{
          "& > legend": { mt: 3 },
        }}
      >
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
      </Box>
      {children}
      <div className="details-card">
        <div className="price">
          <p className="price-1">{oldPrice}</p>
          <h4>{newPrice}</h4>
        </div>
        <img src="/Cart.png" alt="Kros" />
      </div>
    </div>
  );
};

export default ChegermaCard;

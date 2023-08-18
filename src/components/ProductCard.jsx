import React from "react";
import { styled } from "styled-components";

const ProductCard = ({ title, image, price, category, description }) => {
  return (
    <DIV>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div>
        <h4>{price}</h4>
        <h4>{category}</h4>
      </div>
      <p>{description}</p>
    </DIV>
  );
};

export default ProductCard;

let DIV = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 10px;
  border-radius: 8px;
  font-size: 20px;
  text-align: center;
  img {
    width: 10rem;
    display: block;
    margin: auto;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`;

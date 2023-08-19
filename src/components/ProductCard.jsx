import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const ProductCard = ({ title, image, price, category, description, id }) => {
  let auth = useSelector((store) => store.AuthReducer.isAuth);
 
  return (
    <DIV>
      <Link to={`/view/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <h3>{title}</h3>
      <div>
        <h4>{price}</h4>
        <h4>{category}</h4>
      </div>
      <p>{description}</p>
      {auth && (
        <button>
          <Link to={`edit/${id}`}> Edit</Link>
        </button>
      )}
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
  button {
    background-color: teal;
    border: 0;
    padding: 7px 20px;
    border-radius: 8px;
  }
  button a {
    text-decoration: none;
    color: white;
  }
`;

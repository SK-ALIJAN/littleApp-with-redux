import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetData } from "../Redux/action";
import ProductCard from "./ProductCard";
import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  let [searchParam] = useSearchParams();
  let param = {
    category: searchParam.getAll("category"),
    _sort: "price",
    _order: searchParam.get("order"),
  };
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetData(param));
  }, [searchParam]);

  let data = useSelector((store) => {
    return store.GetReducer.data;
  });

  return (
    <DIV>
      {data.map((ele) => {
        return <ProductCard key={ele.id} {...ele} />;
      })}
    </DIV>
  );
};

export default Product;

let DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  padding: 20px;
`;

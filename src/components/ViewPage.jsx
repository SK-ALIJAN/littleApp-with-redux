import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const ViewPage = () => {
  let [item, setItem] = useState({});
  let { id } = useParams();
  let data = useSelector((store) => store.GetReducer.data);
  useEffect(() => {
    let element = data.find((ele) => ele.id === +id);
    setItem(element);
  }, []);
  console.log(data);
  return (
    <DIV>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <div>
        <h4>{item.price}</h4>
        <h4>{item.category}</h4>
      </div>
      <p>{item.description}</p>item.
    </DIV>
  );
};

export default ViewPage;

let DIV = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 10px;
  border-radius: 8px;
  font-size: 20px;
  text-align: center;
  margin: auto;
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

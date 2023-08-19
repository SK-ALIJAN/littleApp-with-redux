import React, { useState } from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { PostData } from "../Redux/action";

const Admin = () => {
  let [data, setData] = useState({
    title: "",
    category: "",
    price: 0,
    image: "",
    description: "",
  });
  let dispatch = useDispatch();

  let handleChange = (e) => {
    let { value, name } = e.target;
    setData((prev) => {
      return { ...prev, [name]: [name] == "price" ? Number(value) : value };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(PostData(data));
  };

  return (

 
      <DIV>
        <h3>Product Add</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Product title..."
            name="title"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Product Category..."
            name="category"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Product price..."
            name="price"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Product image..."
            name="image"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Product description"
            name="description"
            onChange={handleChange}
          />
          <button type="submit">Add Product</button>
        </form>
      </DIV>

  );
};

export default Admin;

let DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  input {
    width: 20rem;
    height: 2rem;
    border-radius: 5px;
    outline: none;
  }
  button {
    height: 2rem;
    border: 0px;
    background-color: teal;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
`;

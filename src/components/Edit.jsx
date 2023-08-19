import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { UpdateData } from "../Redux/action";

const Edit = () => {
  let { id } = useParams();

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
      return { ...prev, [name]: [name] === "price" ? Number(value) : value };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let SubmittedData = {};
    for (let key in data) {
      if (data[key] !== "") {
        SubmittedData[`${key}`] = key == "price" ? +data[key] : data[key];
      }
    }
    dispatch(UpdateData(id, SubmittedData));
  };

  return (
    <DIV>
      <h3>
        {"<--"} Product Update here {"-->"}
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Update title..."
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Update Category..."
          name="category"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Update price..."
          name="price"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Update image..."
          name="image"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Update description"
          name="description"
          onChange={handleChange}
        />
        <button type="submit">Submit update</button>
      </form>
    </DIV>
  );
};

export default Edit;

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

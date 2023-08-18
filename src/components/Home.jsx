import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Product from "./Product";
import { styled } from "styled-components";
const Home = () => {
  return (
    <div>
      <Navbar />
      <WRAPPER>
        <div id="sidebar">
          <Sidebar />
        </div>
        <div id="product">
          <Product />{" "}
        </div>
      </WRAPPER>
    </div>
  );
};

export default Home;

let WRAPPER = styled.div`
  display: flex;
  margin: 10px;
  justify-content: space-between;
  position: relative;
  #sidebar {
    width: 25%;
    border: 2px solid grey;
    height: 100vh;
    border-radius: 5px;
    position: fixed;
    top: 50px;
  }
  #product {
    width: 73%;
    border: 2px solid grey;
    border-radius: 5px;
    position: absolute;
    left: 27%;
  }
`;

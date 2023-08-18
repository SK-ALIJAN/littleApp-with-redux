import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Navbar = () => {
  return (
    <DIV>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/admin">Admin</Link>
    </DIV>
  );
};

export default Navbar;

let DIV = styled.div`
  display: flex;
  background-color: #b7b1b1;
  justify-content: center;
  height: 2rem;
  justify-content: space-around;
  position:sticky;
  top:0px;
  z-index: 3;
`;

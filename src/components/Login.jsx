import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import { AuthenticationByRequest } from "../Redux/action";

const Login = () => {
  let Auth = useSelector((store) => {
    return {
      isAuth: store.AuthReducer.isAuth,
      ErrorMessage: store.AuthReducer.ErrorMessage,
    };
  }, shallowEqual);

  let dispatch = useDispatch();

  let [data, setData] = useState({
    email: "",
    password: "",
  });
  let handleChange = (e) => {
    let { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthenticationByRequest(data));
  };

  return (
    <>
      <Navbar />
      <WRAPPER Error={Auth.ErrorMessage} Auth={Auth.isAuth}>
        <h3 className="Head">
          {Auth.isAuth ? "Login Successfull" : "Login to Continue..."}
        </h3>
        {Auth.ErrorMessage ? <h3>{Auth.ErrorMessage}</h3> : ""}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email here..."
            name="email"
            onChange={handleChange}
            value={data.email}
          />
          <input
            type="Password"
            placeholder="Password here..."
            name="password"
            onChange={handleChange}
            value={data.password}
          />
          <button>Click to Login </button>
        </form>
      </WRAPPER>{" "}
    </>
  );
};

export default Login;

let WRAPPER = styled.div`
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
    border-color: ${({ Error }) => (Error ? "red" : "")};
  }
  button {
    height: 2rem;
    border: 0px;
    background-color: teal;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  .Head {
    color: ${({ Auth }) => (Auth ? "green" : "red")};
  }
`;

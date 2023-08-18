import axios from "axios";
import {
  Authentication,
  AuthenticationError,
  GetdatError,
  GetdataRequest,
  GetdataSuccess,
  PostdatError,
  PostdataRequest,
  PostdataSuccess,
} from "./actionType";
const url = `http://localhost:8080/product`;

export const GetData = (Quary) => (dispatch) => {
  dispatch({ type: GetdataRequest });
  axios
    .get(url, {
      params: Quary,
    })
    .then((res) => {
      dispatch({ type: GetdataSuccess, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GetdatError, payload: err.message });
    });
};

export const PostData = (NewObj) => (dispatch) => {
  dispatch({ type: PostdataRequest });
  axios
    .post(url, NewObj)
    .then((res) => {
      dispatch({ type: PostdataSuccess, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PostdatError, payload: err.message });
    });
};

export const AuthenticationByRequest = (LoginData) => (dispatch) => {
  axios
    .post(`https://reqres.in/api/login`, LoginData)
    .then((res) => {
      dispatch({ type: Authentication, payload: res.token });
    })
    .catch((err) => {
      dispatch({ type: AuthenticationError, payload: err.message });
    });
};

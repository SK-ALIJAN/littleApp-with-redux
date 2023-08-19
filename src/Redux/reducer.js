import {
  Authentication,
  AuthenticationError,
  GetdatError,
  GetdataRequest,
  GetdataSuccess,
  PostdatError,
  PostdataRequest,
  PostdataSuccess,
  updateData,
} from "./actionType";

let GetInitialState = {
  isloading: false,
  data: [],
  isError: false,
  ErrorMessage: "",
  isAuth: false,
};

export const GetReducer = (state = GetInitialState, { type, payload }) => {
  switch (type) {
    case GetdataRequest:
      return { ...state, isloading: true, isError: false };

    case GetdataSuccess:
      return {
        ...state,
        isloading: false,
        isError: false,
        data: payload,
        ErrorMessage: "",
      };

    case GetdatError:
      return { state, isloading: false, isError: true, ErrorMessage: payload };

    default:
      return state;
  }
};

let PostInitialState = {
  isloading: false,
  isError: false,
  ErrorMessage: "",
};

export const PostReducer = (state = PostInitialState, { type, payload }) => {
  switch (type) {
    case PostdataRequest:
      return { ...state, isloading: true, isError: false };

    case PostdataSuccess:
      return {
        ...state,
        isloading: false,
        isError: false,
        ErrorMessage: "",
      };

    case PostdatError:
      return { state, isloading: false, isError: true, ErrorMessage: payload };

    case updateData:
      return {
        ...state,
        isloading: false,
      };

    default:
      return state;
  }
};

let Auth_InitialState = {
  token: "",
  isAuth: false,
  ErrorMessage: "",
};

export const AuthReducer = (state = Auth_InitialState, { type, payload }) => {
  switch (type) {
    case Authentication:
      return { ...state, isAuth: true, token: payload, ErrorMessage: "" };
    case AuthenticationError:
      return { ...state, isAuth: false, token: "", ErrorMessage: payload };
    default:
      return state;
  }
};

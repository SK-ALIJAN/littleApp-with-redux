import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";

import { GetReducer, PostReducer, AuthReducer } from "./reducer";

let RootReducer = combineReducers({
  GetReducer,
  PostReducer,
  AuthReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

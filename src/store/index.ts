import { createStore, applyMiddleware, combineReducers } from "redux";

import logger from "redux-logger";
import { userLogin } from "./reducers/addUser";
import { registerUser } from "./reducers/registerUser";

const rootReducer = combineReducers({
  login: userLogin,
  register: registerUser
});

export const store = createStore(rootReducer, applyMiddleware(logger));

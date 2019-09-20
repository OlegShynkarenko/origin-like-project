import { createStore, applyMiddleware, combineReducers } from "redux";

import logger from "redux-logger";
import { registerUser } from "./reducers/registerUser";
import { logInUser } from "./reducers/logInUser";

const rootReducer = combineReducers({
  login: userLogin,
  register: registerUser
});

export const store = createStore(rootReducer, applyMiddleware(logger));

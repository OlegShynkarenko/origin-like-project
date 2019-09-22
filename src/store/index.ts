import { createStore, applyMiddleware, combineReducers } from "redux";

import logger from "redux-logger";
import { registerUser } from "./reducers/registerUser";
import { userLogIn } from "./reducers/userLogIn";

const rootReducer = combineReducers({
  login: userLogIn,
  register: registerUser
});

export const store = createStore(rootReducer, applyMiddleware(logger));

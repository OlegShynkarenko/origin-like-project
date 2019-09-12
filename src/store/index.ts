import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import { saveUserReducer } from "./reducers/addUser";

export const store = createStore(
  // @ts-ignore
  saveUserReducer,
  applyMiddleware(logger)
);

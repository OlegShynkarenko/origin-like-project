import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import { userLogIn } from "./reducers/addUser";

export const store = createStore(
  // @ts-ignore
  userLogIn,
  applyMiddleware(logger)
);

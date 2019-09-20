import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import { logInUser } from "./reducers/logInUser";

export const store = createStore(
  // @ts-ignore
  logInUser,
  applyMiddleware(logger)
);

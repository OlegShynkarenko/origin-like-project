import { createStore, applyMiddleware, combineReducers } from "redux";

import logger from "redux-logger";
import { registerUserReducer } from "./reducers/registerUserReducer";
import { userLogIn } from "./reducers/userLogIn";
import createSagaMiddleware from "redux-saga";
import rootSaga from "@store/Sagas/user";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  login: userLogIn,
  register: registerUserReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

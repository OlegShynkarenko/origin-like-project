import { createStore, applyMiddleware, combineReducers } from "redux";

import logger from "redux-logger";
import { registerUserReducer } from "./reducers/registerUserReducer";
import { logInUserReducer } from "./reducers/logInUserReducer";
import { getGamesReducer } from "@store/reducers/getGamesReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "@store/Sagas/";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  login: logInUserReducer,
  register: registerUserReducer,
  games: getGamesReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

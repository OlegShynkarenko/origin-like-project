import { all } from "redux-saga/effects";
import { watchUser } from "@store/Sagas/user";
import { watchGames } from "@store/Sagas/games";

export default function* rootSaga() {
  yield all([watchUser(), watchGames()]);
}

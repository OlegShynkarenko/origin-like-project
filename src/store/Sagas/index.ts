import { all } from "redux-saga/effects";
import { watchUser } from "@store/Sagas/user";
import { watchGames, watchCurrentPageGames } from "@store/Sagas/games";

export default function* rootSaga() {
  yield all([watchUser(), watchGames(), watchCurrentPageGames()]);
}

import { call, put, takeLatest } from "redux-saga/effects";
import { getGamesList } from "@store/Sagas/services/getGamesList/getGamesList";
import {
  GET_GAMES_LIST,
  FETCH_GAMES_START,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAIL
} from "@store/types/games";

function* getGamesListSaga() {
  try {
    yield put({ type: FETCH_GAMES_START });
    const data = yield call(getGamesList);
    yield put({ type: FETCH_GAMES_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCH_GAMES_FAIL });
  }
}

export function* watchGames() {
  // @ts-ignore
  yield takeLatest(GET_GAMES_LIST, getGamesListSaga);
}

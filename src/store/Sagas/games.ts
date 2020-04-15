import { call, put, takeLatest } from "redux-saga/effects";
import { getGamesList } from "@store/Sagas/services/getGamesList/getGamesList";
import { Action } from "@store/actionCreators/getGamesList";
import {
  GET_GAMES_LIST,
  GET_GAMES_FOR_CURRENT_PAGE,
  FETCH_GAMES_START,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FOR_CURRENT_PAGE_SUCCESS,
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

function* getGamesListForACertainPage(action: Action) {
  console.log(action);
  try {
    yield put({ type: FETCH_GAMES_START });
    const data = yield call(getGamesList, action.payload.page);
    yield put({ type: FETCH_GAMES_FOR_CURRENT_PAGE_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCH_GAMES_FAIL });
  }
}

export function* watchGames() {
  // @ts-ignore
  yield takeLatest(GET_GAMES_LIST, getGamesListSaga);
}
export function* watchCurrentPageGames() {
  // @ts-ignore
  yield takeLatest(GET_GAMES_FOR_CURRENT_PAGE, getGamesListForACertainPage);
}

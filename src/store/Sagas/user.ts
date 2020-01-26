import { call, put, takeLatest, all } from "redux-saga/effects";
import { addUserToDb } from "../Sagas/services/addDataToDb/addUserToDb";
import { RegisterUser, RegisterUserAction } from "@store/types/RegisterUser";
import { LogInUserAction } from "@store/types/user";
import { logInUser } from "@store/Sagas/services/userLogIn/userLogIn";

function* registerUserSaga(action: RegisterUserAction) {
  try {
    yield put({ type: "REGISTER_USER_START" });
    yield call(addUserToDb, action.payload);
    yield put({ type: "REGISTER_USER_SUCCESS" });
  } catch (e) {
    yield put({ type: "REGISTER_USER_FAIL" });
  }
}

function* logInUserSaga(action: LogInUserAction) {
  try {
    yield put({ type: "LOGIN_USER_START" });
    yield call(logInUser, action.payload);
    yield put({ type: "LOGIN_USER_SUCCESS" });
  } catch (e) {
    yield put({ type: "LOGIN_USER_FAIL" });
  }
}

function* watchUser() {
  // @ts-ignore
  yield takeLatest("REGISTER_USER", registerUserSaga);
  yield takeLatest("LOGIN_USER", logInUserSaga);
}

export default function* rootSaga() {
  yield all([watchUser()]);
}

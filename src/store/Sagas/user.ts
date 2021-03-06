import { call, put, takeLatest, all } from "redux-saga/effects";
import { addUserToDb } from "../Sagas/services/addDataToDb/addUserToDb";
import { RegisterUserAction } from "@store/types/RegisterUser";
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
    const user = yield call(logInUser, action.payload);
    yield put({
      type: "LOGIN_USER_SUCCESS",
      payload: {
        email: user.email,
        name: user.name
      }
    });
  } catch (e) {
    yield put({
      type: "LOGIN_USER_FAIL",
      payload: {
        error: e.message
      }
    });
  }
}

export function* watchUser() {
  // @ts-ignore
  yield takeLatest("REGISTER_USER", registerUserSaga);
  yield takeLatest("LOGIN_USER", logInUserSaga);
}

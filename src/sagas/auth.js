import { takeEvery, put, call } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import * as apiUrl from "../constants/apiUrl";
import * as authAction from "../actions/auth";
import Axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";

function postLoginUser(formData) {
  const user = formData.payload.user;
  const response = Axios.post(
    apiUrl.API_BACKEND + apiUrl.API_LOGIN_USERNAME,
    user
  );
  return response;
}

export function* loginUser(dataBody) {
  try {
    const response = yield call(postLoginUser, dataBody);
    const { data } = response;
    if (data && data.status === true) {
      yield put(authAction.loginUserSuccess(data));
      const token = data.data.access_token;
      localStorage.setItem("jwtToken", token);
      setAuthorizationToken(token);
    } else {
      yield put(authAction.loginUserFailed(data));
    }
  } catch (error) {
    console.log("Error loginUser", error);
    yield put(authAction.loginUserFailed(error));
  }
}
export function* actionAuth() {
  yield takeEvery(types.LOGIN_USER, loginUser);
}

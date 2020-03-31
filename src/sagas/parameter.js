import { takeEvery, put, call } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import * as apiUrl from "../constants/apiUrl";
import Axios from "axios";
import * as parameterAction from "../actions/parameter";
import showNotification from "../utils/notification";

function getApiTypeParameterConstruction() {
  return Axios.get(apiUrl.API_BACKEND + apiUrl.API_TYPE_PARAMETER);
}

export function* getTypeParameterConstruction() {
  try {
    const response = yield call(getApiTypeParameterConstruction);
    const { data } = response;
    if (data && data.status === true) {
      yield put(parameterAction.getTypeParameterConstructionSuccess(data));
    } else {
      yield put(parameterAction.getTypeParameterConstructionFail(data));
    }
  } catch (error) {
    yield put(parameterAction.getTypeParameterConstructionFail(error));
    console.log(error);
  }
}

function getApiParameterConstruction(data) {
  const { id_constructions, id_type_parameter } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
      apiUrl.API_PARAMETER_CONSTRUCTION +
      "?id_constructions=" +
      id_constructions +
      "&id_type_parameter=" +
      id_type_parameter
  );
}

export function* getParameterConstruction(payload) {
  try {
    const response = yield call(getApiParameterConstruction, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(parameterAction.getParameterConstructionSuccess(data));
    } else {
      yield put(parameterAction.getParameterConstructionFail(data));
    }
  } catch (error) {
    yield put(parameterAction.getParameterConstructionFail(error));
    console.log(error);
  }
}

function postApiParameterConstruction(dataBody) {
  const { data } = dataBody.payload;
  return Axios.post(
    apiUrl.API_BACKEND + apiUrl.API_PARAMETER_CONSTRUCTION,
    data
  );
}

export function* postParameterConstruction(dataBody) {
  try {
    const response = yield call(postApiParameterConstruction, dataBody);
    const { data } = response;
    if (data && data.status === true) {
      yield put(parameterAction.postParameterConstructionSuccess(data));
      yield put(
        parameterAction.getParameterConstruction(dataBody.payload.data)
      );
    } else {
      yield put(parameterAction.postParameterConstructionFail(data));
      yield showNotification(data.messages.message);
    }
  } catch (error) {
    yield put(parameterAction.postParameterConstructionFail(error));
    yield showNotification(error);
  }
}

function findApiParameterConstruction(data) {
  const { id_constructions, id_type_parameter, name } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
      apiUrl.API_FIND_PARAMETER +
      "?id_constructions=" +
      id_constructions +
      "&id_type_parameter=" +
      id_type_parameter +
      "&name=" +
      name
  );
}

export function* findParameterConstruction(payload) {
  try {
    const response = yield call(findApiParameterConstruction, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(parameterAction.findParameterConstructionSuccess(data));
    } else {
      yield put(parameterAction.findParameterConstructionFail(data));
    }
  } catch (error) {
    yield put(parameterAction.findParameterConstructionFail(error));
    console.log(error);
  }
}

function delApiParameterConstruction(data) {
  const { id_parameter } = data.payload.data;
  return Axios.delete(
    apiUrl.API_BACKEND + apiUrl.API_PARAMETER_CONSTRUCTION + "/" + id_parameter
  );
}

export function* delParameterConstruction(dataBody) {
  try {
    const response = yield call(delApiParameterConstruction, dataBody);
    const { data } = response;
    if (data && data.status === true) {
      yield put(parameterAction.delParameterConstructionSuccess(data));
      yield put(
        parameterAction.getParameterConstruction(dataBody.payload.data)
      );
      yield showNotification(data.messages.message);
    } else {
      yield put(parameterAction.delParameterConstructionFail(data));
      yield showNotification(data.messages.message);
    }
  } catch (error) {
    yield put(parameterAction.delParameterConstructionFail(error));
    yield showNotification(error);
    console.log(error);
  }
}

function putApiParameterConstruction(dataBody) {
  const { data } = dataBody.payload;
  return Axios.put(
    apiUrl.API_BACKEND + apiUrl.API_PARAMETER_CONSTRUCTION,
    data
  );
}

export function* editParameterConstruction(dataBody) {
  try {
    const response = yield call(putApiParameterConstruction, dataBody);
    const { data } = response;
    if (data && data.status === true) {
      yield put(parameterAction.editParameterConstructionSuccess(data));
      yield put(
        parameterAction.getParameterConstruction(dataBody.payload.data)
      );
    } else {
      yield put(parameterAction.editParameterConstructionFail(data));
      yield showNotification(data.messages.message);
    }
  } catch (error) {
    yield put(parameterAction.editParameterConstructionFail(error));
    yield showNotification(error);
  }
}

export function* actionParameterConstruction() {
  yield takeEvery(
    types.GET_TYPE_PARAMETER_CONSTRUCTION,
    getTypeParameterConstruction
  );
  yield takeEvery(types.GET_PARAMETER_CONSTRUCTION, getParameterConstruction);
  yield takeEvery(types.POST_PARAMETER_CONSTRUCTION, postParameterConstruction);
  yield takeEvery(types.FIND_PARAMETER_CONSTRUCTION, findParameterConstruction);
  yield takeEvery(types.DEL_PARAMETER_CONSTRUCTION, delParameterConstruction);
  yield takeEvery(types.PUT_PARAMETER_CONSTRUCTION, editParameterConstruction);
}

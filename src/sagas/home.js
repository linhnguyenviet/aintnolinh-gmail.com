import { takeEvery, put, call } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import * as apiUrl from "../constants/apiUrl";
import Axios from "axios";
import * as homeAction from "../actions/index";
import showNotification from "../utils/notification"
function getApiAllConstruction() {
  return Axios.get(apiUrl.API_BACKEND + apiUrl.API_CONSTRUCTIONS);
}

export function* getAllConstruction() {
  try {
    const response = yield call(getApiAllConstruction);
    const { data } = response;
    if (data && data.status === true) {
      yield put(homeAction.getAllConstructionSuccess(data));
    } else {
      yield put(homeAction.getAllConstructionFail(data));
    }
  } catch (error) {
    yield put(homeAction.getAllConstructionFail(error));
    console.log(error);
  }
}

function getApiCompanyTrading() {
  return Axios.get(apiUrl.API_BACKEND + apiUrl.API_COMPANY_TRADING);
}

export function* getCompanyTrading() {
  try {
    const response = yield call(getApiCompanyTrading);
    const { data } = response;
    if (data && data.status === true) {
      yield put(homeAction.getCompanyTradingSuccess(data));
    } else {
      yield put(homeAction.getCompanyTradingFail(data));
    }
  } catch (error) {
    yield put(homeAction.getCompanyTradingFail(error));
    console.log(error);
  }
}

function getApiCompanyDesign() {
  return Axios.get(apiUrl.API_BACKEND + apiUrl.API_COMPANY_DESIGN);
}

export function* getCompanyDesign() {
  try {
    const response = yield call(getApiCompanyDesign);
    const { data } = response;
    if (data && data.status === true) {
      yield put(homeAction.getCompanyDesignSuccess(data));
    } else {
      yield put(homeAction.getCompanyDesignFail(data));
    }
  } catch (error) {
    yield put(homeAction.getCompanyDesignFail(error));
    console.log(error);
  }
}

function getApiCompanyManager() {
  return Axios.get(apiUrl.API_BACKEND + apiUrl.API_COMPANY_MANAGER);
}

export function* getCompanyManager() {
  try {
    const response = yield call(getApiCompanyManager);
    const { data } = response;
    if (data && data.status === true) {
      yield put(homeAction.getCompanyManagerSuccess(data));
    } else {
      yield put(homeAction.getCompanyManagerFail(data));
    }
  } catch (error) {
    yield put(homeAction.getCompanyManagerFail(error));
    console.log(error);
  }
}

function getApiCompanyConstruction() {
  return Axios.get(apiUrl.API_BACKEND + apiUrl.API_COMPANY_CONSTRUCTION);
}

export function* getCompanyConstruction() {
  try {
    const response = yield call(getApiCompanyConstruction);
    const { data } = response;
    if (data && data.status === true) {
      yield put(homeAction.getCompanyConstructionSuccess(data));
    } else {
      yield put(homeAction.getCompanyConstructionFail(data));
    }
  } catch (error) {
    yield put(homeAction.getCompanyConstructionFail(error));
    console.log(error);
  }
}

function getApiCompanyUtReview() {
  return Axios.get(apiUrl.API_BACKEND + apiUrl.API_COMPANY_UT_REVIEW);
}

export function* getCompanyUtReview() {
  try {
    const response = yield call(getApiCompanyUtReview);
    const { data } = response;
    if (data && data.status === true) {
      yield put(homeAction.getCompanyUtReviewSuccess(data));
    } else {
      yield put(homeAction.getCompanyUtReviewFail(data));
    }
  } catch (error) {
    yield put(homeAction.getCompanyUtReviewFail(error));
    console.log(error);
  }
}

function getApiUserEmployee() {
  return Axios.get(apiUrl.API_BACKEND + apiUrl.API_USER_EMPLOYEE);
}

export function* getUserEmployee() {
  try {
    const response = yield call(getApiUserEmployee);
    const { data } = response;
    if (data && data.status === true) {
      yield put(homeAction.getUserEmployeeSuccess(data));
    } else {
      yield put(homeAction.getUserEmployeeFail(data));
    }
  } catch (error) {
    yield put(homeAction.getUserEmployeeFail(error));
    console.log(error);
  }
}

function getApiCompanyStageRoughting() {
  return Axios.get(apiUrl.API_BACKEND + apiUrl.API_COMPANY_STAGE_ROUGHTING);
}

export function* getCompanyStageRoughting() {
  try {
    const response = yield call(getApiCompanyStageRoughting);
    const { data } = response;
    if (data && data.status === true) {
      yield put(homeAction.getCompanyStageRoughtingSuccess(data));
    } else {
      yield put(homeAction.getCompanyStageRoughtingFail(data));
    }
  } catch (error) {
    yield put(homeAction.getCompanyStageRoughtingFail(error));
    console.log(error);
  }
}

function getApiCompanyStageProduction() {
  return Axios.get(apiUrl.API_BACKEND + apiUrl.API_COMPANY_STAGE_PRODUCTION);
}

export function* getCompanyStageProduction() {
  try {
    const response = yield call(getApiCompanyStageProduction);
    const { data } = response;
    if (data && data.status === true) {
      yield put(homeAction.getCompanyStageProductionSuccess(data));
    } else {
      yield put(homeAction.getCompanyStageProductionFail(data));
    }
  } catch (error) {
    yield put(homeAction.getCompanyStageProductionFail(error));
    console.log(error);
  }
}

function postApiConstruction(data) {
  const construction = data.payload.construction;
  return Axios.post(
    apiUrl.API_BACKEND + apiUrl.API_CONSTRUCTIONS,
    construction
  );
}

export function* postConstruction(payload) {
  try {
    const response = yield call(postApiConstruction, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(homeAction.postConstructionSuccess(data));
      yield put(homeAction.getAllConstruction());
    } else {

      yield put(homeAction.postConstructionFail(data));
    }
    showNotification(data.messages.message)
  } catch (error) {
    console.log("Test 3");
    yield put(homeAction.postConstructionFail(error));
    console.log(error);
    yield showNotification(error)
  }
}

function putApiConstruction(data) {
  const construction = data.payload.construction;
  return Axios.put(apiUrl.API_BACKEND + apiUrl.API_CONSTRUCTIONS, construction);
}

export function* putConstruction(payload) {
  try {
    const response = yield call(putApiConstruction, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(homeAction.putConstructionSuccess(data));
      yield showNotification(data.messages.message)
      yield put(homeAction.getAllConstruction());
    } else {
      yield put(homeAction.putConstructionFail(data));
      yield showNotification(data.messages.message)


    }
  } catch (error) {
    yield put(homeAction.putConstructionFail(error));
    yield showNotification(error)
    console.log(error);
  }
}

function delApiConstruction(data) {
  const { id_constructions } = data.payload.data;
  return Axios.delete(
    apiUrl.API_BACKEND + apiUrl.API_CONSTRUCTIONS + "/" + id_constructions
  );
}

export function* delConstruction(payload) {
  try {
    const response = yield call(delApiConstruction, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(homeAction.delConstructionSuccess(data));
      yield showNotification(data.messages.message)
      yield put(homeAction.getAllConstruction());
    } else {
      yield put(homeAction.delConstructionFail(data));
      yield showNotification(data.messages.message)
    }
  } catch (error) {
    yield put(homeAction.delConstructionFail(error));
    yield showNotification(error)
    console.log(error);
  }
}

function getApiConstruction(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND + apiUrl.API_CONSTRUCTIONS + "/" + id_constructions
  );
}

export function* getConstruction(payload) {
  try {
    const response = yield call(getApiConstruction, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(homeAction.getConstructionSuccess(data));
    } else {
      yield put(homeAction.getConstructionFail(data));
    }
  } catch (error) {
    yield put(homeAction.getConstructionFail(error));
    console.log(error);
  }
}

export function* actionConstruction() {
  yield takeEvery(types.GET_ALL_CONSTRUCTION, getAllConstruction);
  yield takeEvery(types.GET_COMPANY_TRADING, getCompanyTrading);
  yield takeEvery(types.GET_COMPANY_DESIGN, getCompanyDesign);
  yield takeEvery(types.GET_COMPANY_MANAGER, getCompanyManager);
  yield takeEvery(types.GET_COMPANY_CONSTRUCTION, getCompanyConstruction);
  yield takeEvery(types.GET_COMPANY_UT_REVIEW, getCompanyUtReview);
  yield takeEvery(types.GET_USER_EMPLOYEE, getUserEmployee);
  yield takeEvery(types.GET_COMPANY_STAGE_ROUGHTING, getCompanyStageRoughting);
  yield takeEvery(
    types.GET_COMPANY_STAGE_PRODUCTION,
    getCompanyStageProduction
  );
  yield takeEvery(types.POST_CONSTRUCTION, postConstruction);
  yield takeEvery(types.PUT_CONSTRUCTION, putConstruction);
  yield takeEvery(types.DEL_CONSTRUCTION, delConstruction);
  yield takeEvery(types.GET_CONSTRUCTION, getConstruction);
}

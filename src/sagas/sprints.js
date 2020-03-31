import { takeEvery, put, call } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import * as apiUrl from "../constants/apiUrl";
import Axios from "axios";
import * as sprintsAction from "../actions/sprints";
import showNotification from "../utils/notification";

function getApiAllTypeStagesDefine() {
  return Axios.get(apiUrl.API_BACKEND + apiUrl.API_STAGES_DEFINE_TYPE);
}

export function* getAllTypeStagesDefine() {
  try {
    const response = yield call(getApiAllTypeStagesDefine);
    const { data } = response;
    if (data && data.status === true) {
      yield put(sprintsAction.getAllTypeStagesDefineSuccess(data));
    } else {
      yield put(sprintsAction.getAllTypeStagesDefineFail(data));
    }
  } catch (error) {
    yield put(sprintsAction.getAllTypeStagesDefineFail(error));
  }
}

function postApiProductionStage(dataBody) {
  const { data } = dataBody.payload;
  return Axios.post(
    apiUrl.API_BACKEND + apiUrl.API_STAGES_DEFINE_PRODUCTION,
    data
  );
}

export function* postProductionStage(dataBody) {
  try {
    const response = yield call(postApiProductionStage, dataBody);
    const { data } = response;
    if (data && data.status === true) {
      yield put(sprintsAction.postProductionStageSuccess(data));
      yield showNotification(data.messages.message);
    } else {
      yield put(sprintsAction.postProductionStageFail(data));
      yield showNotification(data.messages.message);
    }
  } catch (error) {
    yield put(sprintsAction.postProductionStageFail(error));
    yield showNotification(error);
  }
}

function postApiRoughingStage(dataBody) {
  const { dataPost } = dataBody.payload.data;
  return Axios.post(
    apiUrl.API_BACKEND + apiUrl.API_STAGE_ROUGHING,
    dataPost
  );
}

export function* postRoughingStage(dataBody) {
  try {
    const response = yield call(postApiRoughingStage, dataBody);
    const { data } = response;
    if (data && data.status === true) {
      yield put(sprintsAction.postRoughingStageSuccess(data));
      yield showNotification(data.messages.message);
    } else {
      yield put(sprintsAction.postRoughingStageFail(data));
      yield showNotification(data.messages.message);
    }
  } catch (error) {
    yield put(sprintsAction.postRoughingStageFail(error));
    yield showNotification(error);
  }
}

function getApiAllStagesProduction(data) {
  const { id_constructions, id_pd_product_common_type } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_STAGES_DEFINE_PRODUCTION +
    "?id_constructions=" +
    id_constructions +
    "&id_pd_product_common_type=" +
    id_pd_product_common_type
  );
}

export function* getAllStagesProduction(payload) {
  try {
    const response = yield call(getApiAllStagesProduction, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(sprintsAction.getAllStagesProductionSuccess(data));
    } else {
      yield put(sprintsAction.getAllStagesProductionFail(data));
    }
  } catch (error) {
    yield put(sprintsAction.getAllStagesProductionFail(error));
  }
}

function getApiAllStageRoughing(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_STAGE_ROUGHING +
    "?id_constructions=" +
    id_constructions
  );
}

export function* getAllStageRoughing(payload) {
  try {
    const response = yield call(getApiAllStageRoughing, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(sprintsAction.getAllStageRoughingSuccess(data));
    } else {
      yield put(sprintsAction.getAllStageRoughingFail(data));
    }
  } catch (error) {
    yield put(sprintsAction.getAllStageRoughingFail(error));
    console.log(error);
  }
}

function getApiAllStageProduction(data) {
  const { id_constructions, id_pd_product_common_type } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_STATE_PRODUCTION +
    "?id_constructions=" +
    id_constructions +
    "&id_pd_product_common_type=" +
    id_pd_product_common_type
  );
}

export function* getAllStageProduction(payload) {
  try {
    const response = yield call(getApiAllStageProduction, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(sprintsAction.getAllStageProductionSuccess(data));
    } else {
      yield put(sprintsAction.getAllStageProductionFail(data));
    }
  } catch (error) {
    yield put(sprintsAction.getAllStageProductionFail(error));
    console.log(error);
  }
}

function getApiProductCommon(data) {
  const { id_constructions, id_pd_product_common_type } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_PRODUCT_CONSTRUCTION +
    "?id_constructions=" +
    id_constructions +
    "&id_pd_product_common_type=" +
    id_pd_product_common_type
  );
}

export function* getProductCommon(payload) {
  try {
    const response = yield call(getApiProductCommon, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(sprintsAction.getProductCommonSuccess(data));
    } else {
      yield put(sprintsAction.getProductCommonFail(data));
    }
  } catch (error) {
    yield put(sprintsAction.getProductCommonFail(error));
    console.log(error);
  }
}

function getApiAllStageComponentTruss(data) {
  const { id_constructions, id_pd_product } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_STAGE_PRODUCT +
    "?id_constructions=" +
    id_constructions +
    "&id_pd_product=" +
    id_pd_product
  );
}

export function* getAllStageComponentTruss(payload) {
  try {
    const response = yield call(getApiAllStageComponentTruss, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(sprintsAction.getAllStageComponentTrussSuccess(data));
    } else {
      yield put(sprintsAction.getAllStageComponentTrussFail(data));
    }
  } catch (error) {
    yield put(sprintsAction.getAllStageComponentTrussFail(error));
    console.log(error);
  }
}

function postApiStageComponentTruss(data) {
  const componentTruss = data.payload.componentTruss;
  return Axios.post(
    apiUrl.API_BACKEND + apiUrl.API_STAGE_PRODUCT,
    componentTruss
  );
}

export function* postStageComponentTruss(payload) {
  try {
    const response = yield call(postApiStageComponentTruss, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(sprintsAction.postStageComponentTrussSuccess(data));
      yield showNotification(data.messages.message);
    } else {
      yield put(sprintsAction.postStageComponentTrussFail(data));
      yield showNotification(data.messages.message);
    }
  } catch (error) {
    yield put(sprintsAction.postStageComponentTrussFail(error));
    yield showNotification(error);
    console.log(error);
  }
}

export function* actionSprints() {
  yield takeEvery(types.GET_ALL_TYPE_STAGE_PROCESSING, getAllTypeStagesDefine);
  yield takeEvery(types.POST_PRODUCTION_STAGE, postProductionStage);
  yield takeEvery(types.GET_ALL_STAGES_PRODUCTION, getAllStagesProduction);
  yield takeEvery(types.GET_ALL_STAGE_ROUGHING, getAllStageRoughing);
  yield takeEvery(types.GET_ALL_STAGE_PRODUCTION, getAllStageProduction);
  yield takeEvery(types.GET_PRODUCT_COMMON, getProductCommon);
  yield takeEvery(
    types.GET_ALL_STAGE_COMPONENT_TRUSS,
    getAllStageComponentTruss
  );
  yield takeEvery(types.POST_STAGE_COMPONENT_TRUSS, postStageComponentTruss);
  yield takeEvery(types.POST_ROUGHING_STAGE, postRoughingStage)
}

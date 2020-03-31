import { takeEvery, put, call } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import * as apiUrl from "../constants/apiUrl";
import Axios from "axios";
import * as processAction from "../actions/process";

function getApiInfoProductBarcode(data) {
  const { barcode } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND + apiUrl.API_INFO_PRODUCT_BARCODE + "?barcode=" + barcode
  );
}

export function* getInfoProductBarcode(payload) {
  try {
    const response = yield call(getApiInfoProductBarcode, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(processAction.getInfoProductBarcodeSuccess(data));
    } else {
      yield put(processAction.getInfoProductBarcodeFail(data));
    }
  } catch (error) {
    yield put(processAction.getInfoProductBarcodeFail(error));
  }
}

function getApiStageRoughingProcess(data) {
  const { id_constructions, barcode } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
      apiUrl.API_STAGE_ROUGHING_PROCESS +
      "?id_constructions=" +
      id_constructions +
      "&barcode=" +
      barcode
  );
}

export function* getStageRoughingProcess(payload) {
  try {
    const response = yield call(getApiStageRoughingProcess, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(processAction.getStageRoughingProcessSuccess(data));
    } else {
      yield put(processAction.getStageRoughingProcessFail(data));
    }
  } catch (error) {
    yield put(processAction.getStageRoughingProcessFail(error));
  }
}

export function* actionProcess() {
  yield takeEvery(types.GET_INFO_PRODUCT_BARCODE, getInfoProductBarcode);
  yield takeEvery(types.GET_STAGE_ROUGHING, getStageRoughingProcess);
}

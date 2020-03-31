import { takeEvery, put, call } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import * as apiUrl from "../constants/apiUrl";
import Axios from "axios";
import * as manageCodeAction from "../actions/manage_code";
import showNotification from "../utils/notification";

function getApiProductCodeLayout(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_GET_PRODUCT_CODE_LAYOUT +
    "?id_constructions=" +
    id_constructions
  );
}
export function* getProductCodeLayout(payload) {
  try {
    const response = yield call(getApiProductCodeLayout, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(manageCodeAction.getProductCodeLayoutSuccess(data));
    } else {
      yield put(manageCodeAction.getProductCodeLayoutFail(data));
    }
  } catch (error) {
    yield put(manageCodeAction.getProductCodeLayoutFail(error));
  }
}

function getApiComponentColumnCodeLayout(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_GET_COMPONENT_COLUMN_CODE_LAYOUT +
    "?id_constructions=" +
    id_constructions
  );
}
export function* getComponentColumnCodeLayout(payload) {
  try {
    const response = yield call(getApiComponentColumnCodeLayout, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(manageCodeAction.getComponentColumnCodeLayoutSuccess(data));
    } else {
      yield put(manageCodeAction.getComponentColumnCodeLayoutFail(data));
    }
  } catch (error) {
    yield put(manageCodeAction.getComponentColumnCodeLayoutFail(error));
  }
}

function getApiComponentTrussCodeLayout(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_GET_COMPONENT_TRUSS_CODE_LAYOUT +
    "?id_constructions=" +
    id_constructions
  );
}
export function* getComponentTrussCodeLayout(payload) {
  try {
    const response = yield call(getApiComponentTrussCodeLayout, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(manageCodeAction.getComponentTrussCodeLayoutSuccess(data));
    } else {
      yield put(manageCodeAction.getComponentTrussCodeLayoutFail(data));
    }
  } catch (error) {
    yield put(manageCodeAction.getComponentTrussCodeLayoutFail(error));
  }
}

function getApiComponentMainGirderCodeLayout(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_GET_COMPONENT_MAIN_GIRDER_CODE_LAYOUT +
    "?id_constructions=" +
    id_constructions
  );
}
export function* getComponentMainGirderCodeLayout(payload) {
  try {
    const response = yield call(getApiComponentMainGirderCodeLayout, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(manageCodeAction.getComponentMainGirderCodeLayoutSuccess(data));
    } else {
      yield put(manageCodeAction.getComponentMainGirderCodeLayoutFail(data));
    }
  } catch (error) {
    yield put(manageCodeAction.getComponentMainGirderCodeLayoutFail(error));
  }
}

function getApiBarcodeProduct(data) {
  const { id_constructions } = data.payload.data;
  console.log(id_constructions)
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_BARCODE_PRODUCT +
    "?id_constructions=" +
    id_constructions
  );
}

export function* getBarcodeProduct(payload) {
  try {
    const response = yield call(getApiBarcodeProduct, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(manageCodeAction.getBarcodeProductSuccess(data));
    } else {
      yield put(manageCodeAction.getBarcodeProductFail(data));
    }
  } catch (error) {
    yield put(manageCodeAction.getBarcodeProductFail(error));
  }
}

function getApiBarcodeColumn(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_BARCODE_COLUMN +
    "?id_constructions=" +
    id_constructions
  );
}

export function* getBarcodeColumn(payload) {
  try {
    const response = yield call(getApiBarcodeColumn, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(manageCodeAction.getBarcodeColumnSuccess(data));
    } else {
      yield put(manageCodeAction.getBarcodeColumnFail(data));
    }
  } catch (error) {
    yield put(manageCodeAction.getBarcodeColumnFail(error));
  }
}

function getApiBarcodeTruss(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_BARCODE_TRUSS +
    "?id_constructions=" +
    id_constructions
  );
}

export function* getBarcodeTruss(payload) {
  try {
    const response = yield call(getApiBarcodeTruss, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(manageCodeAction.getBarcodeTrussSuccess(data));
    } else {
      yield put(manageCodeAction.getBarcodeTrussFail(data));
    }
  } catch (error) {
    yield put(manageCodeAction.getBarcodeTrussFail(error));
  }
}
function getApiBarcodeMainGirder(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_BARCODE_MAIN_GIRDER +
    "?id_constructions=" +
    id_constructions
  );
}

export function* getBarcodeMainGirder(payload) {
  try {
    const response = yield call(getApiBarcodeMainGirder, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(manageCodeAction.getBarcodeMainGirderSuccess(data));
    } else {
      yield put(manageCodeAction.getBarcodeMainGirderFail(data));
    }
  } catch (error) {
    yield put(manageCodeAction.getBarcodeMainGirderFail(error));
  }
}

function postApiBarcodeProduct(data) {
  const product = data.payload.product;
  return Axios.post(apiUrl.API_BACKEND + apiUrl.API_BARCODE_PRODUCT, product);
}

export function* postBarcodeProduct(dataBody) {
  try {
    const response = yield call(postApiBarcodeProduct, dataBody);
    const { data } = response;
    if (data && data.status === true) {
      yield put(manageCodeAction.postBarcodeProductSuccess(data));
      yield showNotification(data.messages.message)
      console.log(dataBody);

      yield put(manageCodeAction.getBarcodeProduct(dataBody.payload.product));
    } else {
      yield put(manageCodeAction.postBarcodeProductFail(data));
      yield showNotification(data.messages.message)
    }
  } catch (error) {
    yield put(manageCodeAction.postBarcodeProductFail(error));
    yield showNotification(error)
  }
}

export function* actionManageCodeProduct() {
  yield takeEvery(types.GET_PRODUCT_CODE_LAYOUT, getProductCodeLayout);
  yield takeEvery(types.GET_BARCODE_PRODUCT, getBarcodeProduct);
  yield takeEvery(types.GET_BARCODE_COLUMN, getBarcodeColumn);
  yield takeEvery(types.GET_BARCODE_TRUSS, getBarcodeTruss);
  yield takeEvery(types.GET_BARCODE_MAIN_GIRDER, getBarcodeMainGirder);
  yield takeEvery(
    types.GET_COMPONENT_COLUMN_CODE_LAYOUT,
    getComponentColumnCodeLayout
  );
  yield takeEvery(
    types.GET_COMPONENT_TRUSS_CODE_LAYOUT,
    getComponentTrussCodeLayout
  );
  yield takeEvery(
    types.GET_COMPONENT_MAIN_GIRDER_CODE_LAYOUT,
    getComponentMainGirderCodeLayout
  );
  yield takeEvery(types.POST_EXPORT_BARCODE_PRODUCT, postBarcodeProduct);
}

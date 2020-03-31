import { takeEvery, put, call } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import * as apiUrl from "../constants/apiUrl";
import Axios from "axios";
import * as productAction from "../actions/product";
import showNotification from "../utils/notification";

//Product
function getApiProductConstruction(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
      apiUrl.API_PRODUCT_CONSTRUCTION +
      "?id_constructions=" +
      id_constructions
  );
}
export function* getProductConstruction(payload) {
  try {
    const response = yield call(getApiProductConstruction, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(productAction.getProductConstructionSuccess(data));
    } else {
      yield put(productAction.getProductConstructionFail(data));
    }
  } catch (error) {
    yield put(productAction.getProductConstructionFail(error));
  }
}

function postApiProductConstruction(dataBody) {
  const { data } = dataBody.payload;
  return Axios.post(apiUrl.API_BACKEND + apiUrl.API_PRODUCT_CONSTRUCTION, data);
}

export function* postProductConstruction(dataBody) {
  try {
    const response = yield call(postApiProductConstruction, dataBody);
    const { data } = response;
    if (data && data.status === true) {
      yield put(productAction.postProductConstructionSuccess(data));
      yield put(productAction.getProductConstruction(dataBody.payload.data));
      yield showNotification(data.messages.message);
    } else {
      yield put(productAction.postProductConstructionFail(data));
      yield showNotification(data.messages.message);
    }
  } catch (error) {
    yield put(productAction.postProductConstructionFail(error));
    yield showNotification(error);
  }
}

function findApiProductConstruction(data) {
  const { id_constructions, id_pd_steel_part, name } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
      apiUrl.API_FIND_PRODUCT +
      "?id_constructions=" +
      id_constructions +
      "&id_pd_steel_part=" +
      id_pd_steel_part +
      "&name=" +
      name
  );
}

export function* findProductConstruction(payload) {
  try {
    const response = yield call(findApiProductConstruction, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(productAction.findProductConstructionSuccess(data));
    } else {
      yield put(productAction.findProductConstructionFail(data));
    }
  } catch (error) {
    yield put(productAction.findProductConstructionFail(error));
  }
}

function delApiProductConstruction(data) {
  const { id } = data.payload.data;
  return Axios.delete(
    apiUrl.API_BACKEND + apiUrl.API_PRODUCT_CONSTRUCTION + "/" + id
  );
}

export function* delProductConstruction(dataBody) {
  try {
    const response = yield call(delApiProductConstruction, dataBody);
    const { data } = response;
    if (data && data.status === true) {
      yield put(productAction.delProductConstructionSuccess(data));
      yield put(productAction.getProductConstruction(dataBody.payload.data));
      yield showNotification(data.messages.message);
    } else {
      yield put(productAction.delProductConstructionFail(data));
      yield showNotification(data.messages.message);
    }
  } catch (error) {
    yield put(productAction.delProductConstructionFail(error));
    yield showNotification(error);
  }
}

function getApiAllProductCommonType(data) {
  return Axios.get(apiUrl.API_BACKEND + apiUrl.API_PRODUCT_COMMON_TYPE);
}

export function* getAllProductCommonType(payload) {
  try {
    const response = yield call(getApiAllProductCommonType, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(productAction.getAllProductCommonTypeSuccess(data));
    } else {
      yield put(productAction.getAllProductCommonTypeFail(data));
    }
  } catch (error) {
    yield put(productAction.getAllProductCommonTypeFail(error));
  }
}
//Column
//get
function getApiColumnComponentProduct(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
      apiUrl.API_PRODUCT_COMPONENTS_COLUMN +
      "?id_constructions=" +
      id_constructions
  );
}
export function* getColumnComponentProduct(payload) {
  try {
    const response = yield call(getApiColumnComponentProduct, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(productAction.getColumnComponentProductSuccess(data));
    } else {
      yield put(productAction.getColumnComponentProductFail(data));
    }
  } catch (error) {
    yield put(productAction.getColumnComponentProductFail(error));
    console.log(error);
  }
}
//find
function findApiColumnComponentProduct(data) {
  const { id_constructions, product_name } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
      apiUrl.API_FIND_PRODUCT_COMPONENTS_COLUMN +
      "?id_constructions=" +
      id_constructions +
      "&product_name=" +
      product_name
  );
}
export function* findColumnComponentProduct(payload) {
  try {
    const response = yield call(findApiColumnComponentProduct, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(productAction.findColumnComponentProductSuccess(data));
    } else {
      yield put(productAction.findColumnComponentProductFail(data));
    }
  } catch (error) {
    yield put(productAction.findColumnComponentProductFail(error));
  }
}
//delete
function delApiColumnComponentProduct(data) {
  const { id_constructions, id } = data.payload.data;
  return Axios.delete(
    apiUrl.API_BACKEND +
      apiUrl.API_PRODUCT_COMPONENTS_COLUMN +
      "/" +
      id +
      "?id_constructions=" +
      id_constructions
  );
}
export function* delColumnComponentProduct(payload) {
  try {
    const response = yield call(delApiColumnComponentProduct, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(productAction.delColumnComponentProductSuccess(data));
      yield showNotification(data.messages.message);
    } else {
      yield put(productAction.delColumnComponentProductFail(data));
      yield showNotification(data.messages.message);
    }
  } catch (error) {
    yield put(productAction.delColumnComponentProductFail(error));
    yield showNotification(error);
  }
}
//Truss
//get
function getApiTrussComponentProduct(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
      apiUrl.API_PRODUCT_COMPONENTS_TRUSS +
      "?id_constructions=" +
      id_constructions
  );
}
export function* getTrussComponentProduct(payload) {
  try {
    const response = yield call(getApiTrussComponentProduct, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(productAction.getTrussComponentProductSuccess(data));
    } else {
      yield put(productAction.getTrussComponentProductFail(data));
    }
  } catch (error) {
    yield put(productAction.getTrussComponentProductFail(error));
  }
}
//find
function findApiTrussComponentProduct(data) {
  const { id_constructions, product_name } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
      apiUrl.API_FIND_PRODUCT_COMPONENTS_TRUSS +
      "?id_constructions=" +
      id_constructions +
      "&product_name=" +
      product_name
  );
}
export function* findTrussComponentProduct(payload) {
  try {
    const response = yield call(findApiTrussComponentProduct, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(productAction.findTrussComponentProductSuccess(data));
    } else {
      yield put(productAction.findTrussComponentProductFail(data));
    }
  } catch (error) {
    yield put(productAction.findTrussComponentProductFail(error));
  }
}
//delete
function delApiTrussComponentProduct(data) {
  const { id, id_constructions } = data.payload.data;
  return Axios.delete(
    apiUrl.API_BACKEND +
      apiUrl.API_PRODUCT_COMPONENTS_TRUSS +
      "/" +
      id +
      "?id_constructions=" +
      id_constructions
  );
}
export function* delTrussComponentProduct(payload) {
  try {
    const response = yield call(delApiTrussComponentProduct, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(productAction.delTrussComponentProductSuccess(data));
      yield showNotification(data.messages.message);
    } else {
      yield put(productAction.delTrussComponentProductFail(data));
      yield showNotification(data.messages.message);
    }
  } catch (error) {
    yield put(productAction.delTrussComponentProductFail(error));
    yield showNotification(error);
  }
}
//Main Girder
//get
function getApiMainGirderComponentProduct(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
      apiUrl.API_PRODUCT_COMPONENTS_MAIN_GIRDER +
      "?id_constructions=" +
      id_constructions
  );
}
export function* getMainGirderComponentProduct(payload) {
  try {
    const response = yield call(getApiMainGirderComponentProduct, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(productAction.getMainGirderComponentProductSuccess(data));
    } else {
      yield put(productAction.getMainGirderComponentProductFail(data));
    }
  } catch (error) {
    yield put(productAction.getMainGirderComponentProductFail(error));
  }
}
//find
function findApiMainGirderComponentProduct(data) {
  const { id_constructions, product_name } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
      apiUrl.API_FIND_PRODUCT_COMPONENTS_MAIN_GIRDER +
      "?id_constructions=" +
      id_constructions +
      "&product_name=" +
      product_name
  );
}
export function* findMainGirderComponentProduct(payload) {
  try {
    const response = yield call(findApiMainGirderComponentProduct, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(productAction.findMainGirderComponentProductSuccess(data));
    } else {
      yield put(productAction.findMainGirderComponentProductFail(data));
    }
  } catch (error) {
    yield put(productAction.findTrussComponentProductFail(error));
  }
}
//del
function delApiMainGirderComponentProduct(data) {
  const { id, id_constructions } = data.payload.data;
  return Axios.delete(
    apiUrl.API_BACKEND +
      apiUrl.API_PRODUCT_COMPONENTS_MAIN_GIRDER +
      "/" +
      id +
      "?id_constructions=" +
      id_constructions
  );
}
export function* delMainGirderComponentProduct(payload) {
  try {
    const response = yield call(delApiMainGirderComponentProduct, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(productAction.delMainGirderComponentProductSuccess(data));
      yield showNotification(data.messages.message);
    } else {
      yield put(productAction.delMainGirderComponentProductFail(data));
      yield showNotification(data.messages.message);
    }
  } catch (error) {
    yield put(productAction.delMainGirderComponentProductFail(error));
    yield showNotification(error);
  }
}

// product-input
function postApiProductInput(data) {
  const product = data.payload.product;
  return Axios.post(
    apiUrl.API_BACKEND + apiUrl.API_PRODUCT_CONSTRUCTION,
    product
  );
}
export function* postProductInput(payload) {
  try {
    const response = yield call(postApiProductInput, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(productAction.postProductInputSuccess(data));
      yield showNotification(data.messages.message);
    } else {
      yield put(productAction.postProductInputFail(data));
      yield showNotification(data.messages.message);
    }
  } catch (error) {
    yield put(productAction.postProductInputFail(error));
    yield showNotification(error);
  }
}

export function* actionProductConstruction() {
  yield takeEvery(types.GET_PRODUCT_CONSTRUCTION, getProductConstruction);
  yield takeEvery(types.POST_PRODUCT_CONSTRUCTION, postProductConstruction);
  yield takeEvery(types.FIND_PRODUCT_CONSTRUCTION, findProductConstruction);
  yield takeEvery(types.DEL_PRODUCT_CONSTRUCTION, delProductConstruction);
  yield takeEvery(
    types.GET_COLUMN_COMPONENTS_PRODUCT,
    getColumnComponentProduct
  );
  yield takeEvery(
    types.FIND_COLUMN_COMPONENTS_PRODUCT,
    findColumnComponentProduct
  );
  yield takeEvery(
    types.DEL_COLUMN_COMPONENTS_PRODUCT,
    delColumnComponentProduct
  );
  yield takeEvery(types.GET_TRUSS_COMPONENTS_PRODUCT, getTrussComponentProduct);
  yield takeEvery(
    types.FIND_TRUSS_COMPONENTS_PRODUCT,
    findTrussComponentProduct
  );
  yield takeEvery(types.DEL_TRUSS_COMPONENTS_PRODUCT, delTrussComponentProduct);
  yield takeEvery(
    types.GET_MAIN_GIRDER_COMPONENTS_PRODUCT,
    getMainGirderComponentProduct
  );
  yield takeEvery(
    types.FIND_MAIN_GIRDER_COMPONENTS_PRODUCT,
    findMainGirderComponentProduct
  );
  yield takeEvery(
    types.DEL_MAIN_GIRDER_COMPONENTS_PRODUCT,
    delMainGirderComponentProduct
  );
  yield takeEvery(types.GET_ALL_PRODUCT_COMMON_TYPE, getAllProductCommonType);
  yield takeEvery(types.POST_LIST_PRODUCT_INPUT, postProductInput);
}

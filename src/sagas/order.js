import { takeEvery, put, call } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import * as apiUrl from "../constants/apiUrl";
import Axios from "axios";
import * as orderAction from "../actions/order";
import showNotification from "../utils/notification"

function getApiAllParameter(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_PARAMETER_CONSTRUCTION +
    "?id_constructions=" +
    id_constructions
  );
}

export function* getAllParameter(payload) {
  try {
    const response = yield call(getApiAllParameter, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.getAllParameterSuccess(data));
    } else {
      yield put(orderAction.getAllParameterFail(data));
    }
  } catch (error) {
    yield put(orderAction.getAllParameterFail(error));
    console.log(error);
  }
}

function getApiSteelPart(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_STEEL_PART +
    "?id_constructions=" +
    id_constructions
  );
}

export function* getSteelPart(payload) {
  try {
    const response = yield call(getApiSteelPart, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.getSteelPartSuccess(data));
    } else {
      yield put(orderAction.getSteelPartFail(data));
    }
  } catch (error) {
    yield put(orderAction.getSteelPartFail(error));
    console.log(error);
  }
}

function postApiSteelShape(data) {
  const steelShape = data.payload.steelShape;
  return Axios.post(
    apiUrl.API_BACKEND + apiUrl.API_STEEL_SHAPE_ORDER,
    steelShape
  );
}

export function* postSteelShapeOrder(payload) {
  try {
    const response = yield call(postApiSteelShape, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.postSteelShapeOrderSuccess(data));
      yield showNotification(data.messages.message)
    } else {
      yield put(orderAction.postSteelShapeOrderFail(data));
      yield showNotification(data.messages.message)
    }
  } catch (error) {
    yield put(orderAction.postSteelShapeOrderFail(error));
    yield showNotification(error)
    console.log(error);
  }
}

function postApiSteelSheet(data) {
  const steelSheet = data.payload.steelSheet;
  return Axios.post(
    apiUrl.API_BACKEND + apiUrl.API_STEEL_SHEET_ORDER,
    steelSheet
  );
}

export function* postSteelSheetOrder(payload) {
  try {
    const response = yield call(postApiSteelSheet, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.postSteelSheetOrderSuccess(data));
      yield showNotification(data.messages.message)
    } else {
      yield put(orderAction.postSteelSheetOrderFail(data));
      yield showNotification(data.messages.message)
    }
  } catch (error) {
    yield put(orderAction.postSteelSheetOrderFail(error));
    yield showNotification(error)
    console.log(error);
  }
}

function delApiSteelSheetOrder(data) {
  const { id_constructions, id_steel_sheet } = data.payload.data;
  return Axios.delete(
    apiUrl.API_BACKEND +
    apiUrl.API_STEEL_SHEET_ORDER +
    "/" +
    id_steel_sheet +
    "?id_constructions=" +
    id_constructions
  );
}

export function* delSteelSheetOrder(dataBody) {
  try {
    const response = yield call(delApiSteelSheetOrder, dataBody);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.delSteelSheetOrderSuccess(data));
      yield put(orderAction.getSteelSheetOrder(dataBody.payload.data));
    } else {
      yield put(orderAction.delSteelSheetOrderFail(data));
    }
  } catch (error) {
    yield put(orderAction.delSteelSheetOrderFail(error));
    console.log(error);
  }
}

function getApiInitType(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_INIT_TYPE +
    "?id_constructions=" +
    id_constructions
  );
}

export function* getInitType(payload) {
  try {
    const response = yield call(getApiInitType, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.getInitTypeSuccess(data));
    } else {
      yield put(orderAction.getInitTypeFail(data));
    }
  } catch (error) {
    yield put(orderAction.getInitTypeFail(error));
    console.log(error);
  }
}

function getApiInitMaterial(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_INIT_MATERIAL +
    "?id_constructions=" +
    id_constructions
  );
}

export function* getInitMaterial(payload) {
  try {
    const response = yield call(getApiInitMaterial, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.getInitMaterialSuccess(data));
    } else {
      yield put(orderAction.getInitMaterialFail(data));
    }
  } catch (error) {
    yield put(orderAction.getInitMaterialFail(error));
    console.log(error);
  }
}

function getApiInitSize(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_INIT_SIZE +
    "?id_constructions=" +
    id_constructions
  );
}

export function* getInitSize(payload) {
  try {
    const response = yield call(getApiInitSize, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.getInitSizeSuccess(data));
    } else {
      yield put(orderAction.getInitSizeFail(data));
    }
  } catch (error) {
    yield put(orderAction.getInitSizeFail(error));
    console.log(error);
  }
}

function getApiInitMachined(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_INIT_MACHINED +
    "?id_constructions=" +
    id_constructions
  );
}

export function* getInitMachined(payload) {
  try {
    const response = yield call(getApiInitMachined, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.getInitMachinedSuccess(data));
    } else {
      yield put(orderAction.getInitMachinedFail(data));
    }
  } catch (error) {
    yield put(orderAction.getInitMachinedFail(error));
    console.log(error);
  }
}

function getApiInitPaintType(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_INIT_PAINT_TYPE +
    "?id_constructions=" +
    id_constructions
  );
}

export function* getInitPaintType(payload) {
  try {
    const response = yield call(getApiInitPaintType, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.getInitPaintTypeSuccess(data));
    } else {
      yield put(orderAction.getInitPaintTypeFail(data));
    }
  } catch (error) {
    yield put(orderAction.getInitPaintTypeFail(error));
    console.log(error);
  }
}

function getApiInitProducerSearch(data) {
  const { id_constructions, name } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_INIT_PRODUCER_SEARCH +
    "?id_constructions=" +
    id_constructions +
    "&name=" +
    name
  );
}

export function* getInitProducerSearch(payload) {
  try {
    const response = yield call(getApiInitProducerSearch, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.getInitProducerSearchSuccess(data));
    } else {
      yield put(orderAction.getInitProducerSearchFail(data));
    }
  } catch (error) {
    yield put(orderAction.getInitProducerSearchFail(error));
    console.log(error);
  }
}

function getApiSteelShapeOrder(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_STEEL_SHAPE_ORDER +
    "?id_constructions=" +
    id_constructions
  );
}

export function* getSteelShapeOrder(payload) {
  try {
    const response = yield call(getApiSteelShapeOrder, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.getSteelShapeOrderSuccess(data));
    } else {
      yield put(orderAction.getSteelShapeOrderFail(data));
    }
  } catch (error) {
    yield put(orderAction.getSteelShapeOrderFail(error));
    console.log(error);
  }
}

function findApiSteelShapeOrder(data) {
  const { id_constructions, name } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_FIND_STEEL_SHAPE_ORDER +
    "?id_constructions=" +
    id_constructions +
    "&name=" +
    name
  );
}

export function* findSteelShapeOrder(payload) {
  try {
    const response = yield call(findApiSteelShapeOrder, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.findSteelShapeOrderSuccess(data));
    } else {
      yield put(orderAction.findSteelShapeOrderFail(data));
    }
  } catch (error) {
    yield put(orderAction.findSteelShapeOrderFail(error));
    console.log(error);
  }
}

function delApiSteelShapeOrder(data) {
  const { id_constructions, id_steel_shape } = data.payload.data;
  return Axios.delete(
    apiUrl.API_BACKEND +
    apiUrl.API_STEEL_SHAPE_ORDER +
    "/" +
    id_steel_shape +
    "?id_constructions=" +
    id_constructions
  );
}

export function* delSteelShapeOrder(dataBody) {
  try {
    const response = yield call(delApiSteelShapeOrder, dataBody);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.delSteelShapeOrderSuccess(data));
      yield put(orderAction.getSteelShapeOrder(dataBody.payload.data));
    } else {
      yield put(orderAction.delSteelShapeOrderFail(data));
    }
  } catch (error) {
    yield put(orderAction.delSteelShapeOrderFail(error));
    console.log(error);
  }
}

function getApiSteelSheetOrder(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_STEEL_SHEET_ORDER +
    "?id_constructions=" +
    id_constructions
  );
}

export function* getSteelSheetOrder(payload) {
  try {
    const response = yield call(getApiSteelSheetOrder, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.getSteelSheetOrderSuccess(data));
    } else {
      yield put(orderAction.getSteelSheetOrderFail(data));
    }
  } catch (error) {
    yield put(orderAction.getSteelSheetOrderFail(error));
    console.log(error);
  }
}

function findApiSteelSheetOrder(data) {
  const { id_constructions, name } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_FIND_STEEL_SHEET_ORDER +
    "?id_constructions=" +
    id_constructions +
    "&name=" +
    name
  );
}

export function* findSteelSheetOrder(payload) {
  try {
    const response = yield call(findApiSteelSheetOrder, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.findSteelSheetOrderSuccess(data));
    } else {
      yield put(orderAction.findSteelSheetOrderFail(data));
    }
  } catch (error) {
    yield put(orderAction.findSteelSheetOrderFail(error));
    console.log(error);
  }
}

function getApiBoltOrder(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_BOLT_ORDER +
    "?id_constructions=" +
    id_constructions
  );
}

export function* getBoltOrder(payload) {
  try {
    const response = yield call(getApiBoltOrder, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.getBoltOrderSuccess(data));
    } else {
      yield put(orderAction.getBoltOrderFail(data));
    }
  } catch (error) {
    yield put(orderAction.getBoltOrderFail(error));
    console.log(error);
  }
}

function postApiBolt(data) {
  const bolt = data.payload.bolt;
  return Axios.post(
    apiUrl.API_BACKEND + apiUrl.API_BOLT_ORDER,
    bolt
  );
}

export function* postBoltOrder(payload) {
  try {
    const response = yield call(postApiBolt, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.postBoltOrderSuccess(data));
      yield showNotification(data.messages.message)
    } else {
      yield put(orderAction.postBoltOrderFail(data));
      yield showNotification(data.messages.message)
    }
  } catch (error) {
    yield put(orderAction.postBoltOrderFail(error));
    yield showNotification(error)
    console.log(error);
  }
}

function delApiBoltOrder(data) {
  const { id_constructions, id_bolt } = data.payload.data;
  return Axios.delete(
    apiUrl.API_BACKEND +
    apiUrl.API_BOLT_ORDER +
    "/" +
    id_bolt +
    "?id_constructions=" +
    id_constructions
  );
}

export function* delBoltOrder(dataBody) {
  try {
    const response = yield call(delApiBoltOrder, dataBody);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.delBoltOrderSuccess(data));
      yield put(orderAction.getBoltOrder(dataBody.payload.data));
    } else {
      yield put(orderAction.delBoltOrderFail(data));
    }
  } catch (error) {
    yield put(orderAction.delBoltOrderFail(error));
    console.log(error);
  }
}

function findApiBoltOrder(data) {
  const { id_constructions, name } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_FIND_BOLT_ORDER +
    "?id_constructions=" +
    id_constructions +
    "&name=" +
    name
  );
}

export function* findBoltOrder(payload) {
  try {
    const response = yield call(findApiBoltOrder, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.findBoltOrderSuccess(data));
    } else {
      yield put(orderAction.findBoltOrderFail(data));
    }
  } catch (error) {
    yield put(orderAction.findBoltOrderFail(error));
    console.log(error);
  }
}

function getApiOtherOrder(data) {
  const { id_constructions } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_OTHER_ORDER +
    "?id_constructions=" +
    id_constructions
  );
}

export function* getOtherOrder(payload) {
  try {
    const response = yield call(getApiOtherOrder, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.getOtherOrderSuccess(data));
    } else {
      yield put(orderAction.getOtherOrderFail(data));
    }
  } catch (error) {
    yield put(orderAction.getOtherOrderFail(error));
    console.log(error);
  }
}

function postApiOther(data) {
  const other = data.payload.other;
  return Axios.post(
    apiUrl.API_BACKEND + apiUrl.API_OTHER_ORDER,
    other
  );
}

export function* postOtherOrder(payload) {
  try {
    const response = yield call(postApiOther, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.postOtherOrderSuccess(data));
      yield showNotification(data.messages.message)
    } else {
      yield put(orderAction.postOtherOrderFail(data));
      yield showNotification(data.messages.message)
    }
  } catch (error) {
    yield put(orderAction.postOtherOrderFail(error));
    yield showNotification(error)
    console.log(error);
  }
}


function delApiOtherOrder(data) {
  const { id_constructions, id_other } = data.payload.data;
  return Axios.delete(
    apiUrl.API_BACKEND +
    apiUrl.API_OTHER_ORDER +
    "/" +
    id_other +
    "?id_constructions=" +
    id_constructions
  );
}

export function* delOtherOrder(dataBody) {
  try {
    const response = yield call(delApiOtherOrder, dataBody);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.delOtherOrderSuccess(data));
      yield put(orderAction.getOtherOrder(dataBody.payload.data));
    } else {
      yield put(orderAction.delOtherOrderFail(data));
    }
  } catch (error) {
    yield put(orderAction.delOtherOrderFail(error));
    console.log(error);
  }
}



function findApiOtherOrder(data) {
  const { id_constructions, name } = data.payload.data;
  return Axios.get(
    apiUrl.API_BACKEND +
    apiUrl.API_FIND_OTHER_ORDER +
    "?id_constructions=" +
    id_constructions +
    "&name=" +
    name
  );
}

export function* findOtherOrder(payload) {
  try {
    const response = yield call(findApiOtherOrder, payload);
    const { data } = response;
    if (data && data.status === true) {
      yield put(orderAction.findOtherOrderSuccess(data));
    } else {
      yield put(orderAction.findOtherOrderFail(data));
    }
  } catch (error) {
    yield put(orderAction.findOtherOrderFail(error));
    console.log(error);
  }
}

export function* actionOrderConstruction() {
  yield takeEvery(types.GET_ALL_PARAMETER, getAllParameter);
  yield takeEvery(types.GET_STEEL_PART, getSteelPart);
  yield takeEvery(types.GET_INIT_MATERIAL, getInitMaterial);
  yield takeEvery(types.GET_INIT_TYPE, getInitType);
  yield takeEvery(types.GET_INIT_SIZE, getInitSize);
  yield takeEvery(types.GET_INIT_MACHINED, getInitMachined);
  yield takeEvery(types.GET_INIT_PAINT_TYPE, getInitPaintType);
  yield takeEvery(types.GET_INIT_PRODUCER_SEARCH, getInitProducerSearch);
  yield takeEvery(types.GET_LIST_ORDER_STEEL_SHAPE, getSteelShapeOrder);
  yield takeEvery(types.POST_ORDER_STEEL_SHAPE, postSteelShapeOrder);
  yield takeEvery(types.FIND_LIST_ORDER_STEEL_SHAPE, findSteelShapeOrder);
  yield takeEvery(types.POST_ORDER_STEEL_SHEET, postSteelSheetOrder);
  yield takeEvery(types.GET_LIST_ORDER_STEEL_SHEET, getSteelSheetOrder);
  yield takeEvery(types.FIND_LIST_ORDER_STEEL_SHEET, findSteelSheetOrder);
  yield takeEvery(types.GET_LIST_ORDER_BOLT, getBoltOrder);
  yield takeEvery(types.POST_ORDER_BOLT, postBoltOrder);
  yield takeEvery(types.FIND_LIST_ORDER_BOLT, findBoltOrder);
  yield takeEvery(types.GET_LIST_ORDER_OTHER, getOtherOrder);
  yield takeEvery(types.POST_ORDER_OTHER, postOtherOrder);
  yield takeEvery(types.FIND_LIST_ORDER_OTHER, findOtherOrder);
  yield takeEvery(types.DEL_LIST_ORDER_STEEL_SHAPE, delSteelShapeOrder);
  yield takeEvery(types.DEL_LIST_ORDER_STEEL_SHEET, delSteelSheetOrder);
  yield takeEvery(types.DEL_LIST_ORDER_BOLT, delBoltOrder);
  yield takeEvery(types.DEL_LIST_ORDER_OTHER, delOtherOrder);

}

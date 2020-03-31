import * as types from "../constants/ActionTypes";

export const getInfoProductBarcode = data => {
  return {
    type: types.GET_INFO_PRODUCT_BARCODE,
    payload: {
      data
    }
  };
};

export const getInfoProductBarcodeSuccess = data => {
  return {
    type: types.GET_INFO_PRODUCT_BARCODE_SUCCESS,
    payload: {
      data
    }
  };
};

export const getInfoProductBarcodeFail = error => {
  return {
    type: types.GET_INFO_PRODUCT_BARCODE_FAIL,
    payload: {
      error
    }
  };
};

export const getStageRoughingProcess = data => {
  return {
    type: types.GET_STAGE_ROUGHING,
    payload: {
      data
    }
  };
};

export const getStageRoughingProcessSuccess = data => {
  return {
    type: types.GET_STAGE_ROUGHING_SUCCESS,
    payload: {
      data
    }
  };
};

export const getStageRoughingProcessFail = error => {
  return {
    type: types.GET_STAGE_ROUGHING_FAIL,
    payload: {
      error
    }
  };
};

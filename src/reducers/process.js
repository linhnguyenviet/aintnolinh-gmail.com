import * as types from "../constants/ActionTypes";

var initState = {
  isLoading: null,
  error: null,
  listInfoProductBarcode: [],
  listProductRoughing: []
};

var processReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_INFO_PRODUCT_BARCODE:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_INFO_PRODUCT_BARCODE_SUCCESS:
      const data_infoProduct = action.payload.data;
      return {
        ...state,
        listInfoProductBarcode: data_infoProduct.data,
        isLoading: false,
        error: null
      };
    case types.GET_INFO_PRODUCT_BARCODE_FAIL:
      return {
        ...state,
        listInfoProductBarcode: [],
        isLoading: false,
        error: action.error
      };
    case types.GET_STAGE_ROUGHING:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_STAGE_ROUGHING_SUCCESS:
      const data_stage_roughing = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listProductRoughing: data_stage_roughing.data
      };
    case types.GET_STAGE_ROUGHING_FAIL:
      return {
        ...state,
        isLoading: false,
        listProductRoughing: [],
        error: action.error
      };
    default:
      return state;
  }
};
export default processReducer;

import * as types from "../constants/ActionTypes";

var initState = {
  listProductCodeLayout: [],
  listColumnCodeLayout: [],
  listTrussCodeLayout: [],
  listMainGirderCodeLayout: [],
  listBarcodeProduct: [],
  listBarcodeColumn: [],
  listBarcodeTruss: [],
  listBarcodeMainGirder: [],
  isLoading: null,
  error: null
};

var manageCodeReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_CODE_LAYOUT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_PRODUCT_CODE_LAYOUT_SUCCESS:
      const data_code_layout = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listProductCodeLayout: data_code_layout.data,
        error: null
      };
    case types.GET_PRODUCT_CODE_LAYOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        listProductCodeLayout: [],
        error: action.error
      };
    case types.GET_COMPONENT_COLUMN_CODE_LAYOUT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_COMPONENT_COLUMN_CODE_LAYOUT_SUCCESS:
      const data_column_layout = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listColumnCodeLayout: data_column_layout.data,
        error: null
      };
    case types.GET_COMPONENT_COLUMN_CODE_LAYOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        listColumnCodeLayout: [],
        error: action.error
      };
    case types.GET_COMPONENT_TRUSS_CODE_LAYOUT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_COMPONENT_TRUSS_CODE_LAYOUT_SUCCESS:
      const data_truss_layout = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listTrussCodeLayout: data_truss_layout.data,
        error: null
      };
    case types.GET_COMPONENT_TRUSS_CODE_LAYOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        listTrussCodeLayout: [],
        error: action.error
      };
    case types.GET_COMPONENT_MAIN_GIRDER_CODE_LAYOUT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_COMPONENT_MAIN_GIRDER_CODE_LAYOUT_SUCCESS:
      const data_main_girder_layout = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listMainGirderCodeLayout: data_main_girder_layout.data,
        error: null
      };
    case types.GET_COMPONENT_MAIN_GIRDER_CODE_LAYOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        listMainGirderCodeLayout: [],
        error: action.error
      };
    case types.GET_BARCODE_PRODUCT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_BARCODE_PRODUCT_SUCCESS:
      const data_barcode = action.payload.data;
      return {
        ...state,
        listBarcodeProduct: data_barcode.data,
        isLoading: false,
        error: null
      };
    case types.GET_BARCODE_PRODUCT_FAIL:
      return {
        ...state,
        listBarcodeProduct: [],
        isLoading: false,
        error: action.error
      };
    case types.GET_BARCODE_COLUMN:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_BARCODE_COLUMN_SUCCESS:
      const barcode_column = action.payload.data;
      return {
        ...state,
        listBarcodeColumn: barcode_column.data,
        isLoading: false,
        error: null
      };
    case types.GET_BARCODE_COLUMN_FAIL:
      return {
        ...state,
        listBarcodeColumn: [],
        isLoading: false,
        error: action.error
      };
    case types.GET_BARCODE_TRUSS:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_BARCODE_TRUSS_SUCCESS:
      const barcode_truss = action.payload.data;
      return {
        ...state,
        listBarcodeTruss: barcode_truss.data,
        isLoading: false,
        error: null
      };
    case types.GET_BARCODE_TRUSS_FAIL:
      return {
        ...state,
        listBarcodeTruss: [],
        isLoading: false,
        error: action.error
      };
    case types.GET_BARCODE_MAIN_GIRDER:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_BARCODE_MAIN_GIRDER_SUCCESS:
      const barcode_main_girder = action.payload.data;
      return {
        ...state,
        listBarcodeMainGirder: barcode_main_girder.data,
        isLoading: false,
        error: null
      };
    case types.GET_BARCODE_MAIN_GIRDER_FAIL:
      return {
        ...state,
        listBarcodeMainGirder: [],
        isLoading: false,
        error: action.error
      };
    case types.POST_EXPORT_BARCODE_PRODUCT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.POST_EXPORT_BARCODE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case types.POST_EXPORT_BARCODE_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};
export default manageCodeReducer;

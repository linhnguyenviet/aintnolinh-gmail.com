import * as types from "../constants/ActionTypes";

var initState = {
  listColumnComponentProduct: [],
  listTrussComponentProduct: [],
  listMainGirderComponentProduct: [],
  listProductConstruction: [],
  listAllProductCommonType: [],
  isLoading: null,
  error: null,
  success: null,
  data_product: [],
  data_product_update: [],
  listProductInputPost: []
};

var productReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_CONSTRUCTION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_PRODUCT_CONSTRUCTION_SUCCESS:
      const data_list_product = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listProductConstruction: data_list_product.data,
        error: null,
        success: data_list_product.messages.message
      };
    case types.GET_PRODUCT_CONSTRUCTION_FAIL:
      return {
        ...state,
        isLoading: false,
        listProductConstruction: [],
        error: action.payload.error
      };
    case types.POST_PRODUCT_CONSTRUCTION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.POST_PRODUCT_CONSTRUCTION_SUCCESS:
      const post_product = action.payload.data;
      return {
        ...state,
        isLoading: false,
        data_product: post_product.data,
        error: null,
      };
    case types.POST_PRODUCT_CONSTRUCTION_FAIL:
      return {
        ...state,
        isLoading: false,
        data_product: [],
        error: action.payload.error
      };
    case types.DEL_PRODUCT_CONSTRUCTION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.DEL_PRODUCT_CONSTRUCTION_SUCCESS:
      return {
        ...state,
        isLoading: true,
        error: null,
        success: action.payload.data.messages.message
      };
    case types.DEL_PRODUCT_CONSTRUCTION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case types.FIND_PRODUCT_CONSTRUCTION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.FIND_PRODUCT_CONSTRUCTION_SUCCESS:
      const find_product = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listProductConstruction: find_product.data,
        error: null,
        success: find_product.messages.message
      };
    case types.FIND_PRODUCT_CONSTRUCTION_FAIL:
      return {
        ...state,
        isLoading: false,
        listProductConstruction: [],
        error: action.payload.error
      };
    case types.GET_COLUMN_COMPONENTS_PRODUCT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_COLUMN_COMPONENTS_PRODUCT_SUCCESS:
      const data_column_components = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listColumnComponentProduct: data_column_components.data,
        error: null,
        success: data_column_components.messages.message
      };
    case types.GET_COLUMN_COMPONENTS_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: false,
        listColumnComponentProduct: [],
        error: action.payload.error
      };
    case types.FIND_COLUMN_COMPONENTS_PRODUCT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.FIND_COLUMN_COMPONENTS_PRODUCT_SUCCESS:
      const find_column = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listColumnComponentProduct: find_column.data,
        error: null,
        success: find_column.messages.message
      };
    case types.FIND_COLUMN_COMPONENTS_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: false,
        listColumnComponentProduct: [],
        error: action.payload.error
      };
    case types.DEL_COLUMN_COMPONENTS_PRODUCT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.DEL_COLUMN_COMPONENTS_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        success: action.payload.data.messages.message
      };
    case types.DEL_COLUMN_COMPONENTS_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case types.GET_TRUSS_COMPONENTS_PRODUCT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_TRUSS_COMPONENTS_PRODUCT_SUCCESS:
      const data_truss_components = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listTrussComponentProduct: data_truss_components.data,
        error: null,
        success: data_truss_components.messages.message
      };
    case types.GET_TRUSS_COMPONENTS_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: false,
        listTrussComponentProduct: [],
        error: action.payload.error
      };
    case types.FIND_TRUSS_COMPONENTS_PRODUCT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.FIND_TRUSS_COMPONENTS_PRODUCT_SUCCESS:
      const find_truss = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listTrussComponentProduct: find_truss.data,
        error: null,
        success: find_truss.messages.message
      };
    case types.FIND_TRUSS_COMPONENTS_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: false,
        listTrussComponentProduct: [],
        error: action.payload.error
      };
    case types.DEL_TRUSS_COMPONENTS_PRODUCT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.DEL_TRUSS_COMPONENTS_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        success: action.payload.data.messages.message
      };
    case types.DEL_TRUSS_COMPONENTS_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case types.GET_MAIN_GIRDER_COMPONENTS_PRODUCT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_MAIN_GIRDER_COMPONENTS_PRODUCT_SUCCESS:
      const data_main_girder_components = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listMainGirderComponentProduct: data_main_girder_components.data,
        error: null,
        success: data_main_girder_components.messages.message
      };
    case types.GET_MAIN_GIRDER_COMPONENTS_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: false,
        listMainGirderComponentProduct: [],
        error: action.payload.error
      };
    case types.FIND_MAIN_GIRDER_COMPONENTS_PRODUCT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.FIND_MAIN_GIRDER_COMPONENTS_PRODUCT_SUCCESS:
      const find_main_girder = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listMainGirderComponentProduct: find_main_girder.data,
        error: null,
        success: find_main_girder.messages.message
      };
    case types.FIND_MAIN_GIRDER_COMPONENTS_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: false,
        listMainGirderComponentProduct: [],
        error: action.payload.error
      };
    case types.DEL_MAIN_GIRDER_COMPONENTS_PRODUCT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.DEL_MAIN_GIRDER_COMPONENTS_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        success: action.payload.data.messages.message
      };
    case types.DEL_MAIN_GIRDER_COMPONENTS_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case types.GET_ALL_PRODUCT_COMMON_TYPE:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_ALL_PRODUCT_COMMON_TYPE_SUCCESS:
      const data_all_type = action.payload.data;
      return {
        ...state,
        listAllProductCommonType: data_all_type.data,
        isLoading: false,
        error: null,
        success: data_all_type.messages.message
      };
    case types.GET_ALL_PRODUCT_COMMON_TYPE_FAIL:
      return {
        ...state,
        listAllProductCommonType: [],
        isLoading: false,
        error: action.payload.error
      };
    case types.POST_LIST_PRODUCT_INPUT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.POST_LIST_PRODUCT_INPUT_SUCCESS:
      const data_post_product_list = action.payload.data;
      const dataPost = [...state.listProductInputPost];
      dataPost.push(data_post_product_list.data);
      return {
        ...state,
        isLoading: false,
        listProductInputPost: dataPost,
        error: null,
      };
    case types.POST_LIST_PRODUCT_INPUT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
export default productReducer;

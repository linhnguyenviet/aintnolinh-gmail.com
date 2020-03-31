import * as types from "../constants/ActionTypes";

var initState = {
  listAllTypeStage: [],
  dataStages: [],
  isLoading: null,
  error: null,
  listAllStageRoughing: [],
  listAllStageProduction: [],
  listProductCommon: [],
  listAllStageComponentTruss: [],
  postError: null,
  postSuccess: null,
  success: null
};

var sprintsReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_ALL_TYPE_STAGE_PROCESSING:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_ALL_TYPE_STAGE_PROCESSING_SUCCESS:
      const data_all_type_stages = action.payload.data;
      return {
        ...state,
        listAllTypeStage: data_all_type_stages.data,
        isLoading: false,
        error: null,
        success: data_all_type_stages.messages.message
      };
    case types.GET_ALL_TYPE_STAGE_PROCESSING_FAIL:
      return {
        ...state,
        listAllTypeStage: [],
        isLoading: false,
        error: action.payload.error
      };
    case types.POST_PRODUCTION_STAGE:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.POST_PRODUCTION_STAGE_SUCCESS:
      const post_stages = action.payload.data;
      return {
        ...state,
        isLoading: false,
        dataStages: post_stages.data,
        error: null
      };
    case types.POST_PRODUCTION_STAGE_FAIL:
      return {
        ...state,
        isLoading: false,
        dataStages: [],
        error: action.payload.error
      };
    case types.POST_ROUGHING_STAGE:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.POST_ROUGHING_STAGE_SUCCESS:
      const post_roughing = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listAllStageRoughing: post_roughing.data,
        error: null
      };
    case types.POST_ROUGHING_STAGE_FAIL:
      return {
        ...state,
        isLoading: false,
        listAllStageRoughing: [],
        error: action.payload.error
      };
    case types.GET_ALL_STAGES_PRODUCTION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_ALL_STAGES_PRODUCTION_SUCCESS:
      const get_stages = action.payload.data;
      return {
        ...state,
        dataStages: get_stages.data,
        isLoading: false,
        error: null,
        success: get_stages.messages.message
      };
    case types.GET_ALL_STAGES_PRODUCTION_FAIL:
      return {
        ...state,
        dataStages: [],
        isLoading: false,
        error: action.payload.error
      };
    case types.GET_ALL_STAGE_ROUGHING:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_ALL_STAGE_ROUGHING_SUCCESS:
      const dataStageRough = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listAllStageRoughing: dataStageRough.data,
        error: null,
        success: dataStageRough.messages.message
      };
    case types.GET_ALL_STAGE_ROUGHING_FAIL:
      return {
        ...state,
        isLoading: false,
        listAllStageRoughing: [],
        error: action.payload.error
      };
    case types.GET_ALL_STAGE_PRODUCTION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_ALL_STAGE_PRODUCTION_SUCCESS:
      const dataStageProduction = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listAllStageProduction: dataStageProduction.data,
        error: null,
        success: dataStageProduction.messages.message
      };
    case types.GET_ALL_STAGE_PRODUCTION_FAIL:
      return {
        ...state,
        isLoading: false,
        listAllStageProduction: [],
        error: action.payload.error
      };
    case types.GET_PRODUCT_COMMON:
      return {
        ...state,
        isLoading: true,
        error: null,
        success: null
      };
    case types.GET_PRODUCT_COMMON_SUCCESS:
      const dataProductCommon = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listProductCommon: dataProductCommon.data,
        error: null,
        success: dataProductCommon.messages.message
      };
    case types.GET_PRODUCT_COMMON_FAIL:
      return {
        ...state,
        isLoading: false,
        listProductCommon: [],
        error: action.payload.error,
        success: null
      };
    case types.GET_ALL_STAGE_COMPONENT_TRUSS:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_ALL_STAGE_COMPONENT_TRUSS_SUCCESS:
      const dataStageComponent = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listAllStageComponentTruss: dataStageComponent.data,
        error: null
      };
    case types.GET_ALL_STAGE_COMPONENT_TRUSS_FAIL:
      return {
        ...state,
        isLoading: false,
        listAllStageComponentTruss: [],
        error: action.payload.error
      };
    case types.POST_STAGE_COMPONENT_TRUSS:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.POST_STAGE_COMPONENT_TRUSS_SUCCESS:
      const dataPostStageComponent = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listAllStageComponentTruss: dataPostStageComponent.data,
        error: null
      };
    case types.POST_STAGE_COMPONENT_TRUSS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
export default sprintsReducer;

import * as types from "../constants/ActionTypes";

var initState = {
  listParameter: [],
  isLoading: null,
  error: null,
  success: null,
  data_parameter: [],
  data_parameter_update: [],
  listTypeParameter: []
};

var parameterReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_TYPE_PARAMETER_CONSTRUCTION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_TYPE_PARAMETER_CONSTRUCTION_SUCCESS:
      const type_parameter = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listTypeParameter: type_parameter.data,
        error: null,
        success: type_parameter.messages.message
      };
    case types.GET_TYPE_PARAMETER_CONSTRUCTION_FAIL:
      return {
        ...state,
        isLoading: false,
        listTypeParameter: [],
        error: action.payload.error
      };
    case types.GET_PARAMETER_CONSTRUCTION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_PARAMETER_CONSTRUCTION_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        isLoading: false,
        listParameter: data.data,
        error: null,
        success: data.messages.message
      };
    case types.GET_PARAMETER_CONSTRUCTION_FAIL:
      return {
        ...state,
        isLoading: false,
        listParameter: [],
        error: action.payload.error
      };
    case types.POST_PARAMETER_CONSTRUCTION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.POST_PARAMETER_CONSTRUCTION_SUCCESS:
      const post_parameter = action.payload.data;
      return {
        ...state,
        isLoading: false,
        data_parameter: post_parameter.data,
        error: null
      };
    case types.POST_PARAMETER_CONSTRUCTION_FAIL:
      return {
        ...state,
        isLoading: false,
        data_parameter: [],
        error: action.payload.error
      };
    case types.DEL_PARAMETER_CONSTRUCTION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.DEL_PARAMETER_CONSTRUCTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case types.DEL_PARAMETER_CONSTRUCTION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case types.FIND_PARAMETER_CONSTRUCTION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.FIND_PARAMETER_CONSTRUCTION_SUCCESS:
      const find_data = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listParameter: find_data.data,
        error: null
      };
    case types.FIND_PARAMETER_CONSTRUCTION_FAIL:
      return {
        ...state,
        isLoading: false,
        listParameter: [],
        error: action.payload.error
      };
    case types.PUT_PARAMETER_CONSTRUCTION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.PUT_PARAMETER_CONSTRUCTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case types.PUT_PARAMETER_CONSTRUCTION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default parameterReducer;

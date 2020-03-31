import * as types from "../constants/ActionTypes";

var initState = {
  listConstruction: [],
  isLoading: null,
  error: null,
  listCompanyTrading: [],
  listCompanyDesign: [],
  listCompanyManager: [],
  listCompanyConstruction: [],
  listCompanyUtReview: [],
  listUserEmployee: [],
  listCompanyStageRoughting: [],
  listCompanyStageProduction: [],
  dataConstruction: []
};

var homeReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_ALL_CONSTRUCTION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_ALL_CONSTRUCTION_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        isLoading: false,
        listConstruction: data.data,
        error: null,
      };
    case types.GET_ALL_CONSTRUCTION_FAIL:
      return {
        ...state,
        isLoading: false,
        listConstruction: [],
        error: action.payload.error
      };
    case types.GET_COMPANY_TRADING:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_COMPANY_TRADING_SUCCESS:
      const dataTrading = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listCompanyTrading: dataTrading.data,
        error: null
      };
    case types.GET_COMPANY_TRADING_FAIL:
      return {
        ...state,
        isLoading: false,
        listCompanyTrading: [],
        error: action.payload.error
      };
    case types.GET_COMPANY_DESIGN:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_COMPANY_DESIGN_SUCCESS:
      const dataDesign = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listCompanyDesign: dataDesign.data,
        error: null
      };
    case types.GET_COMPANY_DESIGN_FAIL:
      return {
        ...state,
        isLoading: false,
        listCompanyDesign: [],
        error: action.payload.error
      };
    case types.GET_COMPANY_MANAGER:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_COMPANY_MANAGER_SUCCESS:
      const dataManager = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listCompanyManager: dataManager.data,
        error: null
      };
    case types.GET_COMPANY_MANAGER_FAIL:
      return {
        ...state,
        isLoading: false,
        listCompanyManager: [],
        error: action.payload.error
      };
    case types.GET_COMPANY_CONSTRUCTION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_COMPANY_CONSTRUCTION_SUCCESS:
      const dataCompanyConstruction = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listCompanyConstruction: dataCompanyConstruction.data,
        error: null
      };
    case types.GET_COMPANY_CONSTRUCTION_FAIL:
      return {
        ...state,
        isLoading: false,
        listCompanyConstruction: [],
        error: action.payload.error
      };
    case types.GET_COMPANY_UT_REVIEW:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_COMPANY_UT_REVIEW_SUCCESS:
      const dataUtReview = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listCompanyUtReview: dataUtReview.data,
        error: null
      };
    case types.GET_COMPANY_UT_REVIEW_FAIL:
      return {
        ...state,
        isLoading: false,
        listCompanyUtReview: [],
        error: action.payload.error
      };
    case types.GET_USER_EMPLOYEE:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_USER_EMPLOYEE_SUCCESS:
      const dataUserEmployee = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listUserEmployee: dataUserEmployee.data,
        error: null
      };
    case types.GET_USER_EMPLOYEE_FAIL:
      return {
        ...state,
        isLoading: false,
        listUserEmployee: [],
        error: action.payload.error
      };
    case types.GET_COMPANY_STAGE_ROUGHTING:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_COMPANY_STAGE_ROUGHTING_SUCCESS:
      const dataStageRoughting = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listCompanyStageRoughting: dataStageRoughting.data,
        error: null
      };
    case types.GET_COMPANY_STAGE_ROUGHTING_FAIL:
      return {
        ...state,
        isLoading: false,
        listCompanyStageRoughting: [],
        error: action.payload.error
      };
    case types.GET_COMPANY_STAGE_PRODUCTION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_COMPANY_STAGE_PRODUCTION_SUCCESS:
      const dataStageProduction = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listCompanyStageProduction: dataStageProduction.data,
        error: null
      };
    case types.GET_COMPANY_STAGE_PRODUCTION_FAIL:
      return {
        ...state,
        isLoading: false,
        listCompanyStageProduction: [],
        error: action.payload.error
      };
    case types.GET_CONSTRUCTION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_CONSTRUCTION_SUCCESS:
      const dataGetConstruction = action.payload.data;
      return {
        ...state,
        isLoading: false,
        dataConstruction: dataGetConstruction.data,
        error: null
      };
    case types.GET_CONSTRUCTION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        dataConstruction: []
      };
    case types.POST_CONSTRUCTION:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case types.POST_CONSTRUCTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case types.POST_CONSTRUCTION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case types.PUT_CONSTRUCTION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.PUT_CONSTRUCTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataConstruction: [],
        error: null,
      };
    case types.PUT_CONSTRUCTION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case types.DEL_CONSTRUCTION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.DEL_CONSTRUCTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case types.DEL_CONSTRUCTION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default homeReducer;

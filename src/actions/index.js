import * as types from "../constants/ActionTypes";

export const getAllConstruction = () => {
  return {
    type: types.GET_ALL_CONSTRUCTION
  };
};

export const getAllConstructionSuccess = data => {
  return {
    type: types.GET_ALL_CONSTRUCTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const getAllConstructionFail = error => {
  return {
    type: types.GET_ALL_CONSTRUCTION_FAIL,
    payload: {
      error
    }
  };
};

export const getCompanyTrading = () => {
  return {
    type: types.GET_COMPANY_TRADING
  };
};

export const getCompanyTradingSuccess = data => {
  return {
    type: types.GET_COMPANY_TRADING_SUCCESS,
    payload: {
      data
    }
  };
};

export const getCompanyTradingFail = error => {
  return {
    type: types.GET_COMPANY_TRADING_FAIL,
    payload: {
      error
    }
  };
};

export const getCompanyDesign = () => {
  return {
    type: types.GET_COMPANY_DESIGN
  };
};

export const getCompanyDesignSuccess = data => {
  return {
    type: types.GET_COMPANY_DESIGN_SUCCESS,
    payload: {
      data
    }
  };
};

export const getCompanyDesignFail = error => {
  return {
    type: types.GET_COMPANY_DESIGN_FAIL,
    payload: {
      error
    }
  };
};

export const getCompanyManager = () => {
  return {
    type: types.GET_COMPANY_MANAGER
  };
};

export const getCompanyManagerSuccess = data => {
  return {
    type: types.GET_COMPANY_MANAGER_SUCCESS,
    payload: {
      data
    }
  };
};

export const getCompanyManagerFail = error => {
  return {
    type: types.GET_COMPANY_MANAGER_FAIL,
    payload: {
      error
    }
  };
};

export const getCompanyConstruction = () => {
  return {
    type: types.GET_COMPANY_CONSTRUCTION
  };
};

export const getCompanyConstructionSuccess = data => {
  return {
    type: types.GET_COMPANY_CONSTRUCTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const getCompanyConstructionFail = error => {
  return {
    type: types.GET_COMPANY_CONSTRUCTION_FAIL,
    payload: {
      error
    }
  };
};

export const getCompanyUtReview = () => {
  return {
    type: types.GET_COMPANY_UT_REVIEW
  };
};

export const getCompanyUtReviewSuccess = data => {
  return {
    type: types.GET_COMPANY_UT_REVIEW_SUCCESS,
    payload: {
      data
    }
  };
};

export const getCompanyUtReviewFail = error => {
  return {
    type: types.GET_COMPANY_UT_REVIEW_FAIL,
    payload: {
      error
    }
  };
};

export const getUserEmployee = () => {
  return {
    type: types.GET_USER_EMPLOYEE
  };
};

export const getUserEmployeeSuccess = data => {
  return {
    type: types.GET_USER_EMPLOYEE_SUCCESS,
    payload: {
      data
    }
  };
};

export const getUserEmployeeFail = error => {
  return {
    type: types.GET_USER_EMPLOYEE_FAIL,
    payload: {
      error
    }
  };
};

export const getCompanyStageRoughting = () => {
  return {
    type: types.GET_COMPANY_STAGE_ROUGHTING
  };
};

export const getCompanyStageRoughtingSuccess = data => {
  return {
    type: types.GET_COMPANY_STAGE_ROUGHTING_SUCCESS,
    payload: {
      data
    }
  };
};

export const getCompanyStageRoughtingFail = error => {
  return {
    type: types.GET_COMPANY_STAGE_ROUGHTING_FAIL,
    payload: {
      error
    }
  };
};

export const getCompanyStageProduction = () => {
  return {
    type: types.GET_COMPANY_STAGE_PRODUCTION
  };
};

export const getCompanyStageProductionSuccess = data => {
  return {
    type: types.GET_COMPANY_STAGE_PRODUCTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const getCompanyStageProductionFail = error => {
  return {
    type: types.GET_COMPANY_STAGE_PRODUCTION_FAIL,
    payload: {
      error
    }
  };
};

export const getConstruction = data => {
  return {
    type: types.GET_CONSTRUCTION,
    payload: {
      data
    }
  };
};

export const getConstructionSuccess = data => {
  return {
    type: types.GET_CONSTRUCTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const getConstructionFail = error => {
  return {
    type: types.GET_CONSTRUCTION_FAIL,
    payload: {
      error
    }
  };
};

export const postConstruction = construction => {
  return {
    type: types.POST_CONSTRUCTION,
    payload: {
      construction
    }
  };
};

export const postConstructionSuccess = data => {
  return {
    type: types.POST_CONSTRUCTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const postConstructionFail = error => {
  return {
    type: types.POST_CONSTRUCTION_FAIL,
    payload: {
      error
    }
  };
};

export const putConstruction = construction => {
  return {
    type: types.PUT_CONSTRUCTION,
    payload: {
      construction
    }
  };
};

export const putConstructionSuccess = data => {
  return {
    type: types.PUT_CONSTRUCTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const putConstructionFail = error => {
  return {
    type: types.PUT_CONSTRUCTION_FAIL,
    payload: {
      error
    }
  };
};

export const delConstruction = data => {
  return {
    type: types.DEL_CONSTRUCTION,
    payload: {
      data
    }
  };
};

export const delConstructionSuccess = data => {
  return {
    type: types.DEL_CONSTRUCTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const delConstructionFail = error => {
  return {
    type: types.DEL_CONSTRUCTION_FAIL,
    payload: {
      error
    }
  };
};

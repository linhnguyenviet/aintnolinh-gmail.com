import * as types from "../constants/ActionTypes";

export const getAllTypeStagesDefine = data => {
  return {
    type: types.GET_ALL_TYPE_STAGE_PROCESSING,
    payload: {
      data
    }
  };
};

export const getAllTypeStagesDefineSuccess = data => {
  return {
    type: types.GET_ALL_TYPE_STAGE_PROCESSING_SUCCESS,
    payload: {
      data
    }
  };
};

export const getAllTypeStagesDefineFail = error => {
  return {
    type: types.GET_ALL_TYPE_STAGE_PROCESSING_FAIL,
    payload: {
      error
    }
  };
};

export const postProductionStage = data => {
  return {
    type: types.POST_PRODUCTION_STAGE,
    payload: {
      data
    }
  };
};

export const postProductionStageSuccess = data => {
  return {
    type: types.POST_PRODUCTION_STAGE_SUCCESS,
    payload: {
      data
    }
  };
};

export const postProductionStageFail = error => {
  return {
    type: types.POST_PRODUCTION_STAGE_FAIL,
    payload: {
      error
    }
  };
};

export const postRoughingStage = data => {
  return {
    type: types.POST_ROUGHING_STAGE,
    payload: {
      data
    }
  };
};

export const postRoughingStageSuccess = data => {
  return {
    type: types.POST_ROUGHING_STAGE_SUCCESS,
    payload: {
      data
    }
  };
};

export const postRoughingStageFail = error => {
  return {
    type: types.POST_ROUGHING_STAGE_FAIL,
    payload: {
      error
    }
  };
};

export const getAllStagesProduction = data => {
  return {
    type: types.GET_ALL_STAGES_PRODUCTION,
    payload: {
      data
    }
  };
};

export const getAllStagesProductionSuccess = data => {
  return {
    type: types.GET_ALL_STAGES_PRODUCTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const getAllStagesProductionFail = error => {
  return {
    type: types.GET_ALL_STAGES_PRODUCTION_FAIL,
    payload: {
      error
    }
  };
};

export const getAllStageRoughing = data => {
  return {
    type: types.GET_ALL_STAGE_ROUGHING,
    payload: {
      data
    }
  };
};

export const getAllStageRoughingSuccess = data => {
  return {
    type: types.GET_ALL_STAGE_ROUGHING_SUCCESS,
    payload: {
      data
    }
  };
};

export const getAllStageRoughingFail = error => {
  return {
    type: types.GET_ALL_STAGE_ROUGHING_FAIL,
    payload: {
      error
    }
  };
};

export const getAllStageProduction = data => {
  return {
    type: types.GET_ALL_STAGE_PRODUCTION,
    payload: {
      data
    }
  };
};

export const getAllStageProductionSuccess = data => {
  return {
    type: types.GET_ALL_STAGE_PRODUCTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const getAllStageProductionFail = error => {
  return {
    type: types.GET_ALL_STAGE_PRODUCTION_FAIL,
    payload: {
      error
    }
  };
};

export const getProductCommon = data => {
  return {
    type: types.GET_PRODUCT_COMMON,
    payload: {
      data
    }
  };
};

export const getProductCommonSuccess = data => {
  return {
    type: types.GET_PRODUCT_COMMON_SUCCESS,
    payload: {
      data
    }
  };
};

export const getProductCommonFail = error => {
  return {
    type: types.GET_PRODUCT_COMMON_FAIL,
    payload: {
      error
    }
  };
};

export const getAllStageComponentTruss = data => {
  return {
    type: types.GET_ALL_STAGE_COMPONENT_TRUSS,
    payload: {
      data
    }
  };
};

export const getAllStageComponentTrussSuccess = data => {
  return {
    type: types.GET_ALL_STAGE_COMPONENT_TRUSS_SUCCESS,
    payload: {
      data
    }
  };
};

export const getAllStageComponentTrussFail = error => {
  return {
    type: types.GET_ALL_STAGE_COMPONENT_TRUSS_FAIL,
    payload: {
      error
    }
  };
};

export const postStageComponentTruss = componentTruss => {
  return {
    type: types.POST_STAGE_COMPONENT_TRUSS,
    payload: {
      componentTruss
    }
  };
};

export const postStageComponentTrussSuccess = data => {
  return {
    type: types.POST_STAGE_COMPONENT_TRUSS_SUCCESS,
    payload: {
      data
    }
  };
};

export const postStageComponentTrussFail = error => {
  return {
    type: types.POST_STAGE_COMPONENT_TRUSS_FAIL,
    payload: {
      error
    }
  };
};

import * as types from "../constants/ActionTypes";

export const getTypeParameterConstruction = () => {
  return {
    type: types.GET_TYPE_PARAMETER_CONSTRUCTION
  };
};

export const getTypeParameterConstructionSuccess = data => {
  return {
    type: types.GET_TYPE_PARAMETER_CONSTRUCTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const getTypeParameterConstructionFail = error => {
  return {
    type: types.GET_TYPE_PARAMETER_CONSTRUCTION_FAIL,
    payload: {
      error
    }
  };
};

export const getParameterConstruction = data => {
  return {
    type: types.GET_PARAMETER_CONSTRUCTION,
    payload: {
      data
    }
  };
};

export const getParameterConstructionSuccess = data => {
  return {
    type: types.GET_PARAMETER_CONSTRUCTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const getParameterConstructionFail = error => {
  return {
    type: types.GET_PARAMETER_CONSTRUCTION_FAIL,
    payload: {
      error
    }
  };
};

export const postParameterConstruction = data => {
  return {
    type: types.POST_PARAMETER_CONSTRUCTION,
    payload: {
      data
    }
  };
};

export const postParameterConstructionSuccess = data => {
  return {
    type: types.POST_PARAMETER_CONSTRUCTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const postParameterConstructionFail = error => {
  return {
    type: types.POST_PARAMETER_CONSTRUCTION_FAIL,
    payload: {
      error
    }
  };
};

export const delParameterConstruction = data => {
  return {
    type: types.DEL_PARAMETER_CONSTRUCTION,
    payload: {
      data
    }
  };
};

export const delParameterConstructionSuccess = data => {
  return {
    type: types.DEL_PARAMETER_CONSTRUCTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const delParameterConstructionFail = error => {
  return {
    type: types.DEL_PARAMETER_CONSTRUCTION_FAIL,
    payload: {
      error
    }
  };
};

export const findParameterConstruction = data => {
  return {
    type: types.FIND_PARAMETER_CONSTRUCTION,
    payload: {
      data
    }
  };
};

export const findParameterConstructionSuccess = data => {
  return {
    type: types.FIND_PARAMETER_CONSTRUCTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const findParameterConstructionFail = error => {
  return {
    type: types.FIND_PARAMETER_CONSTRUCTION_FAIL,
    payload: {
      error
    }
  };
};

export const editParameterConstruction = data => {
  return {
    type: types.PUT_PARAMETER_CONSTRUCTION,
    payload: {
      data
    }
  };
};

export const editParameterConstructionSuccess = data => {
  return {
    type: types.PUT_PARAMETER_CONSTRUCTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const editParameterConstructionFail = error => {
  return {
    type: types.PUT_PARAMETER_CONSTRUCTION_FAIL,
    payload: {
      error
    }
  };
};

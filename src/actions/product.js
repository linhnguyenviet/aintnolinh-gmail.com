import * as types from "../constants/ActionTypes";

export const getProductConstruction = data => {
  return {
    type: types.GET_PRODUCT_CONSTRUCTION,
    payload: {
      data
    }
  };
};
export const getProductConstructionSuccess = data => {
  return {
    type: types.GET_PRODUCT_CONSTRUCTION_SUCCESS,
    payload: {
      data
    }
  };
};
export const getProductConstructionFail = error => {
  return {
    type: types.GET_PRODUCT_CONSTRUCTION_FAIL,
    payload: {
      error
    }
  };
};

export const postProductConstruction = data => {
  return {
    type: types.POST_PRODUCT_CONSTRUCTION,
    payload: {
      data
    }
  };
};
export const postProductConstructionSuccess = data => {
  return {
    type: types.POST_PRODUCT_CONSTRUCTION_SUCCESS,
    payload: {
      data
    }
  };
};
export const postProductConstructionFail = error => {
  return {
    type: types.POST_PRODUCT_CONSTRUCTION_FAIL,
    payload: {
      error
    }
  };
};

export const delProductConstruction = data => {
  return {
    type: types.DEL_PRODUCT_CONSTRUCTION,
    payload: {
      data
    }
  };
};

export const delProductConstructionSuccess = data => {
  return {
    type: types.DEL_PRODUCT_CONSTRUCTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const delProductConstructionFail = error => {
  return {
    type: types.DEL_PRODUCT_CONSTRUCTION_FAIL,
    payload: {
      error
    }
  };
};

export const updateProductConstruction = data => {
  return {
    type: types.PUT_PRODUCT_CONSTRUCTION,
    payload: {
      data
    }
  };
};

export const updateProductConstructionSuccess = data => {
  return {
    type: types.PUT_PRODUCT_CONSTRUCTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const updateProductConstructionFail = error => {
  return {
    type: types.PUT_PRODUCT_CONSTRUCTION_FAIL,
    payload: {
      error
    }
  };
};

export const findProductConstruction = data => {
  return {
    type: types.FIND_PRODUCT_CONSTRUCTION,
    payload: {
      data
    }
  };
};

export const findProductConstructionSuccess = data => {
  return {
    type: types.FIND_PRODUCT_CONSTRUCTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const findProductConstructionFail = error => {
  return {
    type: types.FIND_PRODUCT_CONSTRUCTION_FAIL,
    payload: {
      error
    }
  };
};

export const getColumnComponentProduct = data => {
  return {
    type: types.GET_COLUMN_COMPONENTS_PRODUCT,
    payload: {
      data
    }
  };
};

export const getColumnComponentProductSuccess = data => {
  return {
    type: types.GET_COLUMN_COMPONENTS_PRODUCT_SUCCESS,
    payload: {
      data
    }
  };
};
export const getColumnComponentProductFail = error => {
  return {
    type: types.GET_COLUMN_COMPONENTS_PRODUCT_FAIL,
    payload: {
      error
    }
  };
};

export const findColumnComponentProduct = data => {
  return {
    type: types.FIND_COLUMN_COMPONENTS_PRODUCT,
    payload: {
      data
    }
  };
};

export const findColumnComponentProductSuccess = data => {
  return {
    type: types.FIND_COLUMN_COMPONENTS_PRODUCT_SUCCESS,
    payload: {
      data
    }
  };
};
export const findColumnComponentProductFail = error => {
  return {
    type: types.FIND_COLUMN_COMPONENTS_PRODUCT_FAIL,
    payload: {
      error
    }
  };
};

export const delColumnComponentProduct = data => {
  return {
    type: types.DEL_COLUMN_COMPONENTS_PRODUCT,
    payload: {
      data
    }
  };
};

export const delColumnComponentProductSuccess = data => {
  return {
    type: types.DEL_COLUMN_COMPONENTS_PRODUCT_SUCCESS,
    payload: {
      data
    }
  };
};
export const delColumnComponentProductFail = error => {
  return {
    type: types.DEL_COLUMN_COMPONENTS_PRODUCT_FAIL,
    payload: {
      error
    }
  };
};

export const getTrussComponentProduct = data => {
  return {
    type: types.GET_TRUSS_COMPONENTS_PRODUCT,
    payload: {
      data
    }
  };
};

export const getTrussComponentProductSuccess = data => {
  return {
    type: types.GET_TRUSS_COMPONENTS_PRODUCT_SUCCESS,
    payload: {
      data
    }
  };
};
export const getTrussComponentProductFail = error => {
  return {
    type: types.GET_TRUSS_COMPONENTS_PRODUCT_FAIL,
    payload: {
      error
    }
  };
};

export const delTrussComponentProduct = data => {
  return {
    type: types.DEL_TRUSS_COMPONENTS_PRODUCT,
    payload: {
      data
    }
  };
};

export const delTrussComponentProductSuccess = data => {
  return {
    type: types.DEL_TRUSS_COMPONENTS_PRODUCT_SUCCESS,
    payload: {
      data
    }
  };
};
export const delTrussComponentProductFail = error => {
  return {
    type: types.DEL_TRUSS_COMPONENTS_PRODUCT_FAIL,
    payload: {
      error
    }
  };
};

export const findTrussComponentProduct = data => {
  return {
    type: types.FIND_TRUSS_COMPONENTS_PRODUCT,
    payload: {
      data
    }
  };
};

export const findTrussComponentProductSuccess = data => {
  return {
    type: types.FIND_TRUSS_COMPONENTS_PRODUCT_SUCCESS,
    payload: {
      data
    }
  };
};
export const findTrussComponentProductFail = error => {
  return {
    type: types.FIND_TRUSS_COMPONENTS_PRODUCT_FAIL,
    payload: {
      error
    }
  };
};

export const getMainGirderComponentProduct = data => {
  return {
    type: types.GET_MAIN_GIRDER_COMPONENTS_PRODUCT,
    payload: {
      data
    }
  };
};

export const getMainGirderComponentProductSuccess = data => {
  return {
    type: types.GET_MAIN_GIRDER_COMPONENTS_PRODUCT_SUCCESS,
    payload: {
      data
    }
  };
};
export const getMainGirderComponentProductFail = error => {
  return {
    type: types.GET_MAIN_GIRDER_COMPONENTS_PRODUCT_FAIL,
    payload: {
      error
    }
  };
};

export const delMainGirderComponentProduct = data => {
  return {
    type: types.DEL_MAIN_GIRDER_COMPONENTS_PRODUCT,
    payload: {
      data
    }
  };
};

export const delMainGirderComponentProductSuccess = data => {
  return {
    type: types.DEL_MAIN_GIRDER_COMPONENTS_PRODUCT_SUCCESS,
    payload: {
      data
    }
  };
};
export const delMainGirderComponentProductFail = error => {
  return {
    type: types.DEL_MAIN_GIRDER_COMPONENTS_PRODUCT_FAIL,
    payload: {
      error
    }
  };
};

export const findMainGirderComponentProduct = data => {
  return {
    type: types.FIND_MAIN_GIRDER_COMPONENTS_PRODUCT,
    payload: {
      data
    }
  };
};

export const findMainGirderComponentProductSuccess = data => {
  return {
    type: types.FIND_MAIN_GIRDER_COMPONENTS_PRODUCT_SUCCESS,
    payload: {
      data
    }
  };
};
export const findMainGirderComponentProductFail = error => {
  return {
    type: types.FIND_MAIN_GIRDER_COMPONENTS_PRODUCT_FAIL,
    payload: {
      error
    }
  };
};

export const postProductInput = product => {
  return {
    type: types.POST_LIST_PRODUCT_INPUT,
    payload: {
      product
    }
  };
};
export const postProductInputSuccess = data => {
  return {
    type: types.POST_LIST_PRODUCT_INPUT_SUCCESS,
    payload: {
      data
    }
  };
};
export const postProductInputFail = error => {
  return {
    type: types.POST_LIST_PRODUCT_INPUT_FAIL,
    payload: {
      error
    }
  };
};

export const getAllProductCommonType = data => {
  return {
    type: types.GET_ALL_PRODUCT_COMMON_TYPE,
    payload: {
      data
    }
  };
};

export const getAllProductCommonTypeSuccess = data => {
  return {
    type: types.GET_ALL_PRODUCT_COMMON_TYPE_SUCCESS,
    payload: {
      data
    }
  };
};
export const getAllProductCommonTypeFail = error => {
  return {
    type: types.GET_ALL_PRODUCT_COMMON_TYPE_FAIL,
    payload: {
      error
    }
  };
};

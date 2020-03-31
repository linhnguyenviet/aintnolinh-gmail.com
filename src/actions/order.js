import * as types from "../constants/ActionTypes";

export const getAllParameter = data => {
  return {
    type: types.GET_ALL_PARAMETER,
    payload: {
      data
    }
  };
};

export const getAllParameterSuccess = data => {
  return {
    type: types.GET_ALL_PARAMETER_SUCCESS,
    payload: {
      data
    }
  };
};

export const getAllParameterFail = error => {
  return {
    type: types.GET_ALL_PARAMETER_FAIL,
    payload: {
      error
    }
  };
};

export const getSteelPart = data => {
  return {
    type: types.GET_STEEL_PART,
    payload: {
      data
    }
  };
};

export const getSteelPartSuccess = data => {
  return {
    type: types.GET_STEEL_PART_SUCCESS,
    payload: {
      data
    }
  };
};

export const getSteelPartFail = error => {
  return {
    type: types.GET_STEEL_PART_FAIL,
    payload: {
      error
    }
  };
};

export const getInitType = data => {
  return {
    type: types.GET_INIT_TYPE,
    payload: {
      data
    }
  };
};

export const getInitTypeSuccess = data => {
  return {
    type: types.GET_INIT_TYPE_SUCCESS,
    payload: {
      data
    }
  };
};

export const getInitTypeFail = error => {
  return {
    type: types.GET_INIT_TYPE_FAIL,
    payload: {
      error
    }
  };
};

export const getInitMaterial = data => {
  return {
    type: types.GET_INIT_MATERIAL,
    payload: {
      data
    }
  };
};

export const getInitMaterialSuccess = data => {
  return {
    type: types.GET_INIT_MATERIAL_SUCCESS,
    payload: {
      data
    }
  };
};

export const getInitMaterialFail = error => {
  return {
    type: types.GET_INIT_MATERIAL_FAIL,
    payload: {
      error
    }
  };
};

export const getInitSize = data => {
  return {
    type: types.GET_INIT_SIZE,
    payload: {
      data
    }
  };
};

export const getInitSizeSuccess = data => {
  return {
    type: types.GET_INIT_SIZE_SUCCESS,
    payload: {
      data
    }
  };
};

export const getInitSizeFail = error => {
  return {
    type: types.GET_INIT_SIZE_FAIL,
    payload: {
      error
    }
  };
};

export const getInitMachined = data => {
  return {
    type: types.GET_INIT_MACHINED,
    payload: {
      data
    }
  };
};

export const getInitMachinedSuccess = data => {
  return {
    type: types.GET_INIT_MACHINED_SUCCESS,
    payload: {
      data
    }
  };
};

export const getInitMachinedFail = error => {
  return {
    type: types.GET_INIT_MACHINED_FAIL,
    payload: {
      error
    }
  };
};

export const getInitPaintType = data => {
  return {
    type: types.GET_INIT_PAINT_TYPE,
    payload: {
      data
    }
  };
};

export const getInitPaintTypeSuccess = data => {
  return {
    type: types.GET_INIT_PAINT_TYPE_SUCCESS,
    payload: {
      data
    }
  };
};

export const getInitPaintTypeFail = error => {
  return {
    type: types.GET_INIT_PAINT_TYPE_FAIL,
    payload: {
      error
    }
  };
};

export const getInitProducerSearch = data => {
  return {
    type: types.GET_INIT_PRODUCER_SEARCH,
    payload: {
      data
    }
  };
};

export const getInitProducerSearchSuccess = data => {
  return {
    type: types.GET_INIT_PRODUCER_SEARCH_SUCCESS,
    payload: {
      data
    }
  };
};

export const getInitProducerSearchFail = error => {
  return {
    type: types.GET_INIT_PRODUCER_SEARCH_FAIL,
    payload: {
      error
    }
  };
};

export const getSteelShapeOrder = data => {
  return {
    type: types.GET_LIST_ORDER_STEEL_SHAPE,
    payload: {
      data
    }
  };
};

export const getSteelShapeOrderSuccess = data => {
  return {
    type: types.GET_LIST_ORDER_STEEL_SHAPE_SUCCESS,
    payload: {
      data
    }
  };
};

export const getSteelShapeOrderFail = error => {
  return {
    type: types.GET_LIST_ORDER_STEEL_SHAPE_FAIL,
    payload: {
      error
    }
  };
};

export const postSteelShapeOrder = steelShape => {
  return {
    type: types.POST_ORDER_STEEL_SHAPE,
    payload: {
      steelShape
    }
  };
};

export const postSteelShapeOrderSuccess = data => {
  return {
    type: types.POST_ORDER_STEEL_SHAPE_SUCCESS,
    payload: {
      data
    }
  };
};

export const postSteelShapeOrderFail = error => {
  return {
    type: types.POST_ORDER_STEEL_SHAPE_FAIL,
    payload: {
      error
    }
  };
};

export const findSteelShapeOrder = data => {
  return {
    type: types.FIND_LIST_ORDER_STEEL_SHAPE,
    payload: {
      data
    }
  };
};

export const findSteelShapeOrderSuccess = data => {
  return {
    type: types.FIND_LIST_ORDER_STEEL_SHAPE_SUCCESS,
    payload: {
      data
    }
  };
};

export const findSteelShapeOrderFail = error => {
  return {
    type: types.FIND_LIST_ORDER_STEEL_SHAPE_FAIL,
    payload: {
      error
    }
  };
};

export const delSteelShapeOrder = data => {
  return {
    type: types.DEL_LIST_ORDER_STEEL_SHAPE,
    payload: {
      data
    }
  };
};

export const delSteelShapeOrderSuccess = data => {
  return {
    type: types.DEL_LIST_ORDER_STEEL_SHAPE_SUCCESS,
    payload: {
      data
    }
  };
};

export const delSteelShapeOrderFail = error => {
  return {
    type: types.DEL_LIST_ORDER_STEEL_SHAPE_FAIL,
    payload: {
      error
    }
  };
};

export const postSteelSheetOrder = steelSheet => {
  return {
    type: types.POST_ORDER_STEEL_SHEET,
    payload: {
      steelSheet
    }
  };
};

export const postSteelSheetOrderSuccess = data => {
  return {
    type: types.POST_ORDER_STEEL_SHEET_SUCCESS,
    payload: {
      data
    }
  };
};

export const postSteelSheetOrderFail = error => {
  return {
    type: types.POST_ORDER_STEEL_SHEET_FAIL,
    payload: {
      error
    }
  };
};

export const delSteelSheetOrder = data => {
  return {
    type: types.DEL_LIST_ORDER_STEEL_SHEET,
    payload: {
      data
    }
  };
};

export const delSteelSheetOrderSuccess = data => {
  return {
    type: types.DEL_LIST_ORDER_STEEL_SHEET_SUCCESS,
    payload: {
      data
    }
  };
};

export const delSteelSheetOrderFail = error => {
  return {
    type: types.DEL_LIST_ORDER_STEEL_SHEET_FAIL,
    payload: {
      error
    }
  };
};

export const delBoltOrder = data => {
  return {
    type: types.DEL_LIST_ORDER_BOLT,
    payload: {
      data
    }
  };
};

export const delBoltOrderSuccess = data => {
  return {
    type: types.DEL_LIST_ORDER_BOLT_SUCCESS,
    payload: {
      data
    }
  };
};

export const delBoltOrderFail = error => {
  return {
    type: types.DEL_LIST_ORDER_BOLT_FAIL,
    payload: {
      error
    }
  };
};


export const getSteelSheetOrder = data => {
  return {
    type: types.GET_LIST_ORDER_STEEL_SHEET,
    payload: {
      data
    }
  };
};

export const getSteelSheetOrderSuccess = data => {
  return {
    type: types.GET_LIST_ORDER_STEEL_SHEET_SUCCESS,
    payload: {
      data
    }
  };
};

export const getSteelSheetOrderFail = error => {
  return {
    type: types.GET_LIST_ORDER_STEEL_SHEET_FAIL,
    payload: {
      error
    }
  };
};

export const findSteelSheetOrder = data => {
  return {
    type: types.FIND_LIST_ORDER_STEEL_SHEET,
    payload: {
      data
    }
  };
};

export const findSteelSheetOrderSuccess = data => {
  return {
    type: types.FIND_LIST_ORDER_STEEL_SHEET_SUCCESS,
    payload: {
      data
    }
  };
};

export const findSteelSheetOrderFail = error => {
  return {
    type: types.FIND_LIST_ORDER_STEEL_SHEET_FAIL,
    payload: {
      error
    }
  };
};

export const getBoltOrder = data => {
  return {
    type: types.GET_LIST_ORDER_BOLT,
    payload: {
      data
    }
  };
};

export const getBoltOrderSuccess = data => {
  return {
    type: types.GET_LIST_ORDER_BOLT_SUCCESS,
    payload: {
      data
    }
  };
};

export const getBoltOrderFail = error => {
  return {
    type: types.GET_LIST_ORDER_BOLT_FAIL,
    payload: {
      error
    }
  };
};

export const postBoltOrder = bolt => {
  return {
    type: types.POST_ORDER_BOLT,
    payload: {
      bolt
    }
  };
};

export const postBoltOrderSuccess = data => {
  return {
    type: types.POST_ORDER_BOLT_SUCCESS,
    payload: {
      data
    }
  };
};

export const postBoltOrderFail = error => {
  return {
    type: types.POST_ORDER_BOLT_FAIL,
    payload: {
      error
    }
  };
};
export const findBoltOrder = data => {
  return {
    type: types.FIND_LIST_ORDER_BOLT,
    payload: {
      data
    }
  };
};

export const findBoltOrderSuccess = data => {
  return {
    type: types.FIND_LIST_ORDER_BOLT_SUCCESS,
    payload: {
      data
    }
  };
};

export const findBoltOrderFail = error => {
  return {
    type: types.FIND_LIST_ORDER_BOLT_FAIL,
    payload: {
      error
    }
  };
};

export const getOtherOrder = data => {
  return {
    type: types.GET_LIST_ORDER_OTHER,
    payload: {
      data
    }
  };
};

export const getOtherOrderSuccess = data => {
  return {
    type: types.GET_LIST_ORDER_OTHER_SUCCESS,
    payload: {
      data
    }
  };
};

export const getOtherOrderFail = error => {
  return {
    type: types.GET_LIST_ORDER_OTHER_FAIL,
    payload: {
      error
    }
  };
};

export const postOtherOrder = other => {
  return {
    type: types.POST_ORDER_OTHER,
    payload: {
      other
    }
  };
};

export const postOtherOrderSuccess = data => {
  return {
    type: types.POST_ORDER_OTHER_SUCCESS,
    payload: {
      data
    }
  };
};

export const postOtherOrderFail = error => {
  return {
    type: types.POST_ORDER_OTHER_FAIL,
    payload: {
      error
    }
  };
};

export const delOtherOrder = data => {
  return {
    type: types.DEL_LIST_ORDER_OTHER,
    payload: {
      data
    }
  };
};

export const delOtherOrderSuccess = data => {
  return {
    type: types.DEL_LIST_ORDER_OTHER_SUCCESS,
    payload: {
      data
    }
  };
};

export const delOtherOrderFail = error => {
  return {
    type: types.DEL_LIST_ORDER_OTHER_FAIL,
    payload: {
      error
    }
  };
};
export const findOtherOrder = data => {
  return {
    type: types.FIND_LIST_ORDER_OTHER,
    payload: {
      data
    }
  };
};

export const findOtherOrderSuccess = data => {
  return {
    type: types.FIND_LIST_ORDER_OTHER_SUCCESS,
    payload: {
      data
    }
  };
};

export const findOtherOrderFail = error => {
  return {
    type: types.FIND_LIST_ORDER_OTHER_FAIL,
    payload: {
      error
    }
  };
};

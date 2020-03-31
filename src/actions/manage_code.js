import * as types from "../constants/ActionTypes";

export const getProductCodeLayout = data => {
  return {
    type: types.GET_PRODUCT_CODE_LAYOUT,
    payload: {
      data
    }
  };
};

export const getProductCodeLayoutSuccess = data => {
  return {
    type: types.GET_PRODUCT_CODE_LAYOUT_SUCCESS,
    payload: {
      data
    }
  };
};

export const getProductCodeLayoutFail = error => {
  return {
    type: types.GET_PRODUCT_CODE_LAYOUT_FAIL,
    payload: {
      error
    }
  };
};

export const getComponentColumnCodeLayout = data => {
  return {
    type: types.GET_COMPONENT_COLUMN_CODE_LAYOUT,
    payload: {
      data
    }
  };
};

export const getComponentColumnCodeLayoutSuccess = data => {
  return {
    type: types.GET_COMPONENT_COLUMN_CODE_LAYOUT_SUCCESS,
    payload: {
      data
    }
  };
};

export const getComponentColumnCodeLayoutFail = error => {
  return {
    type: types.GET_COMPONENT_COLUMN_CODE_LAYOUT_FAIL,
    payload: {
      error
    }
  };
};

export const getComponentTrussCodeLayout = data => {
  return {
    type: types.GET_COMPONENT_TRUSS_CODE_LAYOUT,
    payload: {
      data
    }
  };
};

export const getComponentTrussCodeLayoutSuccess = data => {
  return {
    type: types.GET_COMPONENT_TRUSS_CODE_LAYOUT_SUCCESS,
    payload: {
      data
    }
  };
};

export const getComponentTrussCodeLayoutFail = error => {
  return {
    type: types.GET_COMPONENT_TRUSS_CODE_LAYOUT_FAIL,
    payload: {
      error
    }
  };
};

export const getComponentMainGirderCodeLayout = data => {
  return {
    type: types.GET_COMPONENT_MAIN_GIRDER_CODE_LAYOUT,
    payload: {
      data
    }
  };
};

export const getComponentMainGirderCodeLayoutSuccess = data => {
  return {
    type: types.GET_COMPONENT_MAIN_GIRDER_CODE_LAYOUT_SUCCESS,
    payload: {
      data
    }
  };
};

export const getComponentMainGirderCodeLayoutFail = error => {
  return {
    type: types.GET_COMPONENT_MAIN_GIRDER_CODE_LAYOUT_FAIL,
    payload: {
      error
    }
  };
};

export const getBarcodeProduct = data => {
  return {
    type: types.GET_BARCODE_PRODUCT,
    payload: {
      data
    }
  };
};

export const getBarcodeProductSuccess = data => {
  return {
    type: types.GET_BARCODE_PRODUCT_SUCCESS,
    payload: {
      data
    }
  };
};

export const getBarcodeProductFail = error => {
  return {
    type: types.GET_BARCODE_PRODUCT_FAIL,
    payload: {
      error
    }
  };
};

export const getBarcodeColumn = data => {
  return {
    type: types.GET_BARCODE_COLUMN,
    payload: {
      data
    }
  };
};

export const getBarcodeColumnSuccess = data => {
  return {
    type: types.GET_BARCODE_COLUMN_SUCCESS,
    payload: {
      data
    }
  };
};

export const getBarcodeColumnFail = error => {
  return {
    type: types.GET_BARCODE_COLUMN_FAIL,
    payload: {
      error
    }
  };
};

export const getBarcodeTruss = data => {
  return {
    type: types.GET_BARCODE_TRUSS,
    payload: {
      data
    }
  };
};

export const getBarcodeTrussSuccess = data => {
  return {
    type: types.GET_BARCODE_TRUSS_SUCCESS,
    payload: {
      data
    }
  };
};

export const getBarcodeTrussFail = error => {
  return {
    type: types.GET_BARCODE_TRUSS_FAIL,
    payload: {
      error
    }
  };
};

export const getBarcodeMainGirder = data => {
  return {
    type: types.GET_BARCODE_MAIN_GIRDER,
    payload: {
      data
    }
  };
};

export const getBarcodeMainGirderSuccess = data => {
  return {
    type: types.GET_BARCODE_MAIN_GIRDER_SUCCESS,
    payload: {
      data
    }
  };
};

export const getBarcodeMainGirderFail = error => {
  return {
    type: types.GET_BARCODE_MAIN_GIRDER_FAIL,
    payload: {
      error
    }
  };
};

export const postBarcodeProduct = product => {
  return {
    type: types.POST_EXPORT_BARCODE_PRODUCT,
    payload: {
      product
    }
  };
};

export const postBarcodeProductSuccess = data => {
  return {
    type: types.POST_EXPORT_BARCODE_PRODUCT_SUCCESS,
    payload: {
      data
    }
  };
};

export const postBarcodeProductFail = error => {
  return {
    type: types.POST_EXPORT_BARCODE_PRODUCT_FAIL,
    payload: {
      error
    }
  };
};

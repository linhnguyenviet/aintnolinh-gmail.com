import * as types from "../constants/ActionTypes";

export const loginUser = user => {
  return {
    type: types.LOGIN_USER,
    payload: {
      user
    }
  };
};

export const loginUserSuccess = data => {
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload: {
      data
    }
  };
};

export const loginUserFailed = error => {
  return {
    type: types.LOGIN_USER_FAIL,
    payload: {
      error
    }
  };
};

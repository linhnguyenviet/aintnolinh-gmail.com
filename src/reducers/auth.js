import * as types from "../constants/ActionTypes";
import * as messages from "../constants/errorMessages";

var initialState = {
  user: {},
  isAuthenticated: false,
  token: localStorage.getItem("jwtToken"),
  error: null,
  isLoadingAuth: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        token: data.data.access_token,
        error: null,
        data
      };
    case types.LOGIN_USER_FAIL:
      return { ...state, error: messages.ERROR_LOGIN_FAIL };
    default:
      return state;
  }
};

export default auth;

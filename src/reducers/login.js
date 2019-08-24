'use strict';

const initialState = {
  successfulLogin: undefined
};

export const loginReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case 'LOGIN_SUCCESSFULL': {
      return {
        ...state,
        successfulLogin: true
      };
    }
    case 'LOGIN_FAILED': {
      return {
        ...state,
        successfulLogin: false
      };
    }
    default:
      return state;
  }
};

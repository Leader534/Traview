'use strict';

import * as Api from '../libs/api';

export function onLogin(username, password) {
  return dispatch => {
    Api.post(url, { username: username, password: password })
      .then(() => {
        dispatch({
          type: 'LOGIN_SUCCESSFULL'
        });
      })
      .catch(() => {
        dispatch({
          type: 'LOGIN_FAILED'
        });
      });
  };
}

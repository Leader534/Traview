'use strict';

import * as Api from '../libs/api';

export function fetchFollowersAndFollowing() {
  return dispatch => {
    Api.get(url).then(res => {
      dispatch({
        type: 'FETCHED_FOLLOWERS_AND_FOLLOWING',
        data: res
      });
    });
  };
}

export function removeFollowers(id) {
  return dispatch => {
    Api.post(url, { id: id }).then(res => {
      dispatch({
        type: 'REMOVED_FOLLOWER',
        data: { id: id }
      });
    });
  };
}

export function removeFollowing(id) {
  return dispatch => {
    Api.post(url, { id: id }).then(res => {
      dispatch({
        type: 'REMOVED_FOLLOWING',
        data: { id: id }
      });
    });
  };
}

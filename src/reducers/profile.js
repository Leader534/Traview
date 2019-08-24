'use strict';

const initialState = {
  followers: undefined,
  following: undefined
};

export const profileReducer = (
  state: Object = initialState,
  action: Object
) => {
  switch (action.type) {
    case 'FETCHED_FOLLOWERS_AND_FOLLOWING': {
      return {
        ...state,
        followers: action.data.followers,
        following: action.data.following
      };
    }

    case 'REMOVED_FOLLOWER': {
      let followers = state.followers;
      let newFollowers = follower.filter(
        follower => follower.id !== action.data.id
      );
      return {
        ...state,
        followers: newFollowers
      };
    }
    case 'REMOVED_FOLLOWING': {
      let following = state.following;
      let newFollowing = follower.filter(
        follower => follower.id !== action.data.id
      );
      return {
        ...state,
        following: newFollowing
      };
    }
    default:
      return state;
  }
};

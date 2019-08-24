import { loginReducer } from './login';
import * as NavigationConstants from '../constants/navigation';
import { profileReducer } from './profile';
import { combineReducers } from 'redux';
import { createPostReducer } from './create-post';

const userCombinedReducers = combineReducers({
  loginReducer,
  profileReducer,
  createPostReducer
});

const initialState: Object = {};

export default (state: ?Object = initialState, action: Object) => {
  if (action.type === NavigationConstants.ON_LOGOUT) {
    state = initialState;
  }
  return userCombinedReducers(state, action);
};

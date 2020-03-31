import { combineReducers } from 'redux';
import userInfoReducer from './userInfoReducer';
import blogReducer from './blogReducer';
import contributions from './contributions';
export default combineReducers({
  loggedInUserInfo: userInfoReducer,
  blogList: blogReducer,
  contributions
});

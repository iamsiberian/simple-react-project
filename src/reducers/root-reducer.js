import { combineReducers } from 'redux';

import appCompReducer from '../pages/app/reducer';

const appReducer = combineReducers({
  appCompReducer
});

export default (state = {}, action) => {
  return appReducer(state, action);
}
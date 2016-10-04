import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import message from './message';

export default combineReducers({
  message,
  routing: routerReducer
});

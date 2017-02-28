import {combineReducers} from 'redux';
import UsersReducer from './users';

export const allReducers = combineReducers({
  users:UsersReducer,
});

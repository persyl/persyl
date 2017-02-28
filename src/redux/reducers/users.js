import * as types from '../actionTypes';

export default (state = {users: []}, action) => {
  switch (action.type) {
    case types.USERS_FETCHED:
      return Object.assign({}, state, {
        users: action.users
      });
    default:
      return Object.assign({}, state);
  }
}

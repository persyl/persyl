import * as types from '../actionTypes';

const users = [
    {
      firstName:'Per',
      lastName:'Lundkvist'
    },
    {
      firstName:'John',
      lastName:'Doe'
    }
  ];

export function getUsers(){
  return function(dispatch){
    dispatch(usersFetched(users));
  };
}

function usersFetched(users){
  return {
    type: types.USERS_FETCHED,
    users
  }
}

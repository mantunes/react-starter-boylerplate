import * as types from './../../types';

// Action Creators
export function login(name) {
  return {
    type: types.LOGIN,
    payload: { name },
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}

// Initial state
const initialState = null;

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return { name: action.payload.name };

    case types.LOGOUT:
      return null;

    default:
      return state;
  }
}

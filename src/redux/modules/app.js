import { push } from 'react-router-redux';

import * as types from '../types';

// Action Creators
export function pushRoute(route) {
  return push(route);
}

export function addName(name) {
  return {
    type: types.ADD_NAME,
    payload: { name },
  };
}

export function removeName(index) {
  return {
    type: types.SUBTRACT_NAME,
    payload: { index },
  };
}

export async function getPost() {
  let post = null;

  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    console.log("..................");
    console.log(response);
    console.log("..................");
    console.log(response.json);
    console.log("..................");
    post = await response.json();
  } catch (error) {
    console.log(error);
  }

  const bla = {
    type: types.GET_POST,
    payload: { post },
  };

  return bla;
}

export function clearPost() {
  return {
    type: types.CLEAR_POST,
  };
}

// Initial state
const initialState = {
  list: [
    { id: 1, name: 'Joao' },
    { id: 2, name: 'Sara' },
    { id: 3, name: 'Rui' },
  ],
  post: null,
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NAME: {
      const tmpId = new Date().valueOf();
      return {
        ...state,
        list: [...state.list, { id: tmpId, name: action.payload.name }],
      };
    }

    case types.SUBTRACT_NAME:
      return {
        ...state,
        list: state.list.filter(elem => elem.id !== action.payload.index),
      };

    case types.GET_POST:
      return {
        ...state,
        post: action.payload.post,
      };

    case types.CLEAR_POST:
      return {
        ...state,
        post: null,
      };

    default:
      return state;
  }
}

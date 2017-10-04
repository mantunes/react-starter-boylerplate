import * as types from './../../types';

// Action Creators
export async function login(email, pass) {
  let data = null;
  let token = null;
  try{
    const response = await fetch(
      'http://localhost:3000/users/sign_in.json',
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ "user":{ 
                  "email": email,
                  "password": pass,
                }
              }),
      });
    data = await response.json();
    console.log(response.headers);
  }catch(error){
    console.log(error);
  }
  
  console.log(data);

  return {
    type: types.LOGIN,
    payload: { data, token },
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
      return { data: action.payload.data };

    case types.LOGOUT:
      return null;

    default:
      return state;
  }
}

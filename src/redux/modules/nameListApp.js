const ADDED_NAME = 'ADDED_NAME';
const SUBTRACTED_NAME = 'SUBTRACTED_NAME';


export function addName(name){
  return {
    type: ADDED_NAME,
    name
  }
}

export function removeName(index){
  return {
    type: SUBTRACTED_NAME,
    index
  }
}


const initialState = ['Joao', 'Sara', 'Rui'];


export default function reducer(state = initialState, action){
  switch (action.type){

  case ADDED_NAME:
    return Object.assign(
      [],
      state,
      state.push(action.name)
    );

  case SUBTRACTED_NAME:
    return Object.assign(
      [],
      state.slice(0, action.index).concat(state.slice(action.index+1))
    );

  default:
    return state;
  }
}

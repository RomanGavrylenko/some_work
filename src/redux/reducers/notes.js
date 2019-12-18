import { ADD_NOTE } from "../actions/notes";

const defaultState = ["note 1", "note 2", "note 3", "note 4"]; 

const initState = JSON.parse(localStorage.getItem('notes')) || defaultState;

export default function(state = initState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state.slice(0, +action.payload.afterIndex + 1),
        action.payload.text,
        ...state.slice(+action.payload.afterIndex + 1)
      ];
    default:
      return state;
  }
}

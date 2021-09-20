import { ON_ADD_NOTE } from "../actions/actionTypes"

const initialState = {
  notes: [],
}

export default function boardReducer(state = initialState, action) {
  switch(action.type) {
    case ON_ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.note]
      };
    default:
      return state
  }
}
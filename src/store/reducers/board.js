import { ON_ADD_NOTE, ON_DELETE_NOTE } from "../actions/actionTypes"

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
    case ON_DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.noteId !== action.id)
      };
    default:
      return state
  }
}
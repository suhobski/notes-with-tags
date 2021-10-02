import {
  ON_ADD_NOTE,
  ON_DELETE_NOTE,
  ON_EDIT_NOTE,
} from '../actions/actionTypes';

const initialState = {
  notes: [],
};

function editNote(state, newNote) {
  const { notes } = state;
  const noteIndex = notes.findIndex((note) => note.noteId === newNote.noteId);
  notes[noteIndex] = newNote;
  return notes;
}

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case ON_ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.note],
      };
    case ON_DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.noteId !== action.id),
      };
    case ON_EDIT_NOTE:
      return {
        ...state,
        notes: [...editNote(state, action.note)],
      };
    default:
      return state;
  }
}

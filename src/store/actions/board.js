import { ON_ADD_NOTE, ON_DELETE_NOTE, ON_EDIT_NOTE } from './actionTypes'

export function addNote (note) {
  return {
    type: ON_ADD_NOTE,
    note,
  }
}

export function deleteNote (id) {
  return {
    type: ON_DELETE_NOTE,
    id,
  }
}

export function editNote (note) {
  return {
    type: ON_EDIT_NOTE,
    note,
  }
}

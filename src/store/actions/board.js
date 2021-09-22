import { ON_ADD_NOTE, ON_DELETE_NOTE } from './actionTypes'

export function addNote(note){
  return {
    type: ON_ADD_NOTE,
    note,
  }
}

export function deleteNote(id){
  return {
    type: ON_DELETE_NOTE,
    id,
  }
}
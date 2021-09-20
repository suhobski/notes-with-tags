import { ON_ADD_NOTE } from './actionTypes'

export function addNote(note){
  return {
    type: ON_ADD_NOTE,
    note,
  }
}
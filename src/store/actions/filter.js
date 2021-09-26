import { ON_SET_TAG } from './actionTypes'

export function setTag (tag) {
  return {
    type: ON_SET_TAG,
    tag,
  }
}

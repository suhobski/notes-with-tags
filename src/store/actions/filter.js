import { ON_SET_TAG } from './actionTypes';

export default function setTag(tag) {
  return {
    type: ON_SET_TAG,
    tag,
  };
}

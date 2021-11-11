import { ON_SET_TAG, ON_CHANGE_FILTER_VISIBILITY } from './actionTypes';

export function setTag(filterTag) {
  return {
    type: ON_SET_TAG,
    filterTag,
  };
}

export function changeFilterVisibility(filterVisibility) {
  return {
    type: ON_CHANGE_FILTER_VISIBILITY,
    filterVisibility,
  };
}

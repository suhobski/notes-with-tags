import {
  ON_SET_TAG,
  ON_CHANGE_FILTER_VISIBILITY,
} from '../actions/actionTypes';

const initialState = {
  filterTag: '',
  isFilterOpen: false,
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case ON_SET_TAG:
      return {
        ...state,
        filterTag: action.filterTag,
      };
    case ON_CHANGE_FILTER_VISIBILITY:
      return {
        ...state,
        isFilterOpen: action.filterVisibility,
      };
    default:
      return state;
  }
}

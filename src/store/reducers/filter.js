import { ON_SET_TAG } from '../actions/actionTypes';

const initialState = {
  tag: '',
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case ON_SET_TAG:
      return {
        ...state,
        tag: action.tag,
      };
    default:
      return state;
  }
}

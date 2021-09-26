import { combineReducers } from 'redux'
import boardReducer from './board'
import filterReducer from './filter'

export default combineReducers({
  board: boardReducer,
  filter: filterReducer,
})

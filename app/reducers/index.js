import { combineReducers } from 'redux'
import chapReducer from './chapterReducer'
import homeReducer from './homeReducer'

const rootReducer = combineReducers({
  chapReducer, homeReducer
})

export default rootReducer

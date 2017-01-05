
import {
	CHAPTER_ACTIONS
	} from '../actions/actionTypes'
import { combineReducers } from 'redux';

const initialChapterState = {
	content: "",
	refreshing: true,
	loading:true,
	reset:true
}

const ChaptersReducer = (state = initialChapterState, action) => {
	switch (action.type) {
		case CHAPTER_ACTIONS.loading:
			return Object.assign({}, state, { refreshing: true })
        case CHAPTER_ACTIONS.next:
            return Object.assign({}, state, { refreshing: true })
        case CHAPTER_ACTIONS.previous:
            return Object.assign({}, state, { refreshing: true })
		default: 
			return state
	}
}

const chapReducer = combineReducers({
  ChaptersReducer
})

export default chapReducer
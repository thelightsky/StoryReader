
import {
	API_INIT
	} from '../actions/actionTypes'
import { combineReducers } from 'redux';

const initialHomeState = {
	result: {},
	refreshing: true,
	loading:true,
	reset:true
}

const LoadAllChaptersReducer = (state = initialHomeState, action) => {
	switch (action.type) {
		case API_INIT:
			return Object.assign({}, state, { refreshing: true })
		default: 
			return state
	}
}

const homeReducer = combineReducers({
  LoadAllChaptersReducer
})

export default homeReducer
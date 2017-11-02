import { combineReducers } from 'redux'

const initialState = {
	categories: [],
}

function portfolio (state = initialState, action) {
	switch (action.type) {
		// case INIT:
		// 	return {
		// 		...state
		// 	}

		default:
			return portfolio
	}
}

export default combineReducers({
	portfolio
})
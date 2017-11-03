import { combineReducers } from 'redux'

const initialState = {
	mainCategories: ["Home", "About", "Skills", "Projects", "Contact"],
	secondCategories: ["LinkedIn", "GitHub"],
}

function portfolio (state = initialState, action) {
	switch (action.type) {
		// case INIT:
		// 	return {
		// 		...state
		// 	}

		default:
			return {
				...state
			}
	}
}

export default combineReducers({
	portfolio
})
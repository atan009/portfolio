import { combineReducers } from 'redux'
import { projects } from '../Utils/projects.js'

const initialState = {
	mainCategories: ["Home", "About", "Skills", "Projects", "Contact"],
	secondCategories: ["LinkedIn", "GitHub"],
	projects: projects,
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
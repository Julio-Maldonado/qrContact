import {UPDATE_FIRST_VISIT} from '../constants/actionTypes'

export function firstVisit(state = true, action) {
	switch (action.type) {
		case UPDATE_FIRST_VISIT:
			return action.firstVisit
		default:
			return state
	}
}

import {UPDATE_FIRST_VISIT} from '../constants/actionTypes'

export function updateFirstVisit(firstVisit) {
    return {
        type: UPDATE_FIRST_VISIT,
        firstVisit
    }
}

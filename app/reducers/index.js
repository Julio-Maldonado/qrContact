import {combineReducers} from 'redux'
import {contact} from './contact'
import {firstVisit} from './firstVisit'

const rootReducer = combineReducers({
    contact,
    firstVisit
})

export default rootReducer
import {UPDATE_CONTACT} from '../constants/actionTypes'

export function updateContact(contact) {
    return {
        type: UPDATE_CONTACT,
        contact
    }
}

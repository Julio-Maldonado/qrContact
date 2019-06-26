import {UPDATE_CONTACT} from '../constants/actionTypes'

let DEFAULT_CONTACT = {
	"firstName" : "",
	"lastName" : "",
	"phoneNumber" : "",
	"instagramUsername" : "",
	"twitterUsername" : "",
	"facebookURL" : "",
	"companyName" : "",
	"title" : ""
}

export function contact(state = DEFAULT_CONTACT, action) {
	switch (action.type) {
	case UPDATE_CONTACT:
		console.log('state=', state)
		console.log('action=', action)
		return action.contact
	default:
		return state
	}
}

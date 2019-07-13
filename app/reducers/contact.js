import {UPDATE_CONTACT} from '../constants/actionTypes'

let DEFAULT_CONTACT = {
	"firstName" : "Julio",
	"lastName" : "Maldonado",
	"phoneNumber" : "9569903738",
	"instagramUsername" : "_julio_maldonado",
	"twitterUsername" : "",
	"facebookURL" : "julio.maldonado.904",
	"companyName" : "",
	"title" : ""
}

DEFAULT_CONTACT = {
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
			return action.contact
		default:
			return state
	}
}

import React from 'react'
import {connect} from 'react-redux'
import Scenes from '../components/Scenes'
import {Router} from 'react-native-router-flux'

// import {updateContact} from '../actions/index'
// import {updateFirstVisit} from '../actions/index'

// const mapStateToProps = (state) => ({
// 	contact: state.contact,
// 	firstVisit: state.firstVisit
// })

// const mapDispatchToProps = (dispatch) => ({
// 	updateContact: (contact) => {
// 		dispatch(updateContact(contact))
// 	},
// 	updateFirstVisit: (firstVisit) => {
// 		dispatch(updateFirstVisit(firstVisit))
// 	}
// })

const ConnectedRouter = connect()(Router)

const AppContainer = () => (
	<ConnectedRouter scenes={Scenes} />
)

export default AppContainer
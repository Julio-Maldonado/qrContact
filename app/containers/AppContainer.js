import {connect} from 'react-redux'
import App from '../components/Route'
import {updateContact} from '../actions/index'

const mapStateToProps = (state) => ({
	contact: state.contact
})

const mapDispatchToProps = (dispatch) => ({
	updateContact: (contact) => {
		dispatch(updateContact(contact))
	},
})

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(App)

export default AppContainer

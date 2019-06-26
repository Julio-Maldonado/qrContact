import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import AppContainer from './containers/AppContainer'

const store = configureStore()

const app = () => (
	<Provider store={store}>
		<AppContainer />
	</Provider>
)

export default app

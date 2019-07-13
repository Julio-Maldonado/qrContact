import React from 'react'
import {Provider} from 'react-redux'
import {persistor, store} from './store/configureStore'
import AppContainer from './containers/AppContainer'
import { PersistGate } from 'redux-persist/integration/react'

const app = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<AppContainer />
		</PersistGate>
	</Provider>
)

export default app

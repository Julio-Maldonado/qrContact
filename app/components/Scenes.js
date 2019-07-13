/**
 * @format
 * @flow
 */
import React from 'react'
import {Scene, Actions} from 'react-native-router-flux'
import EditContact from './EditContact'
import QRContact from './QRContact'
import Welcome from './Welcome'

const Scenes = Actions.create(
	<Scene key="root" >
		<Scene
			key="Welcome"
			component={Welcome}
			hideNavBar={true}
			left={() => null}
			initial />
		<Scene
			key="QRContact"
			component={QRContact}
			hideNavBar={true}
			left={() => null} />
		<Scene
			key="EditContact"
			component={EditContact}
			hideNavBar={false}
			left={() => null} />
	</Scene>
)

export default Scenes


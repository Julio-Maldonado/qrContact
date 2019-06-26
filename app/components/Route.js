/**
 * @format
 * @flow
 */

import React from 'react'
import createStyles from './styles'
import {Router, Scene, Stack} from 'react-native-router-flux'
import EditContact from './EditContact'
import QRContact from './QRContact'

const styles = createStyles()

const Route = (props) => (
	<Router {...props}>
		<Stack key="root">
			<Scene
				key="EditContact"
				component={EditContact}
				hideNavBar={false}
				title="QR Contact"
				left={() => null}
				navigationBarStyle={styles.statusBar}
				titleStyle={styles.navTitleCenter}
				initial
			/>
			<Scene
				key="QRContact"
				component={QRContact}
				hideNavBar={true}
				left={() => null}
				// initial
			/>
    </Stack>
  </Router>
)

export default Route


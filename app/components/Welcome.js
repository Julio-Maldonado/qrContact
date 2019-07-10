/**
 * @format
 * @flow
 */
import React, {Component} from 'react'
import {AppState, Text, View} from 'react-native'
import QRCode from 'react-native-qrcode'
import createStyles from './styles'
import StatusBar from '../customComponents/MyStatusBar'
import {Actions} from 'react-native-router-flux'
import {updateContact} from '../actions/index'
import {updateFirstVisit} from '../actions/index'
import {connect} from 'react-redux'
import * as variables from '../constants/variables'
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => ({
	contact: state.contact,
	firstVisit: state.firstVisit
})

const mapDispatchToProps = (dispatch) => ({
	updateContact: (contact) => {
		dispatch(updateContact(contact))
	},
	updateFirstVisit: (firstVisit) => {
		dispatch(updateFirstVisit(firstVisit))
	}
})

const styles = createStyles()

class Welcome extends Component {
  componentDidMount() {
    console.log(this.props)
    if (this.props.firstVisit) {
        AppState.addEventListener('change', this._handleAppStateChange)
        setTimeout(() => {
          Actions.push("EditContact", {...this.props})
        },
        1000)
    } else {
        setTimeout(() => {
            Actions.push("QRContact", {...this.props})
        },
        1000)
    }
  }

  state = {
		appState: AppState.currentState
	}

	componentWillUnmount() {
		AppState.removeEventListener('change', this._handleAppStateChange)
	}

	_handleAppStateChange = async (nextAppState) => {
    if (this.state.appState.match(/active/) && 
      (nextAppState === 'active' || nextAppState === 'inactive') &&
      this.props.firstVisit === true) {
        await this.props.updateFirstVisit(false)
        console.log(this.props)
        console.log('updatedfirstvisit')
		}
		this.setState({appState: nextAppState})
	}


  render() {
    return (
      <View style={styles.welcomeContainer}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.welcomeTitle}>Sqr me</Text>
        <View style={styles.logo}>
          <View style={styles.person}>
            <Icon name="user" color="#47A6D6" size={55} />
          </View>
            <QRCode
            value={variables.defaultQRValue}
            size={150}
            bgColor='#47A6D6'
            fgColor='white' />
        </View>
      </View>
    )
  }
}

Welcome.propTypes = {
  updateContact: PropTypes.func.isRequired,
  updateFirstVisit: PropTypes.func.isRequired
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Welcome)
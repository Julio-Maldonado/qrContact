import React, {Component} from 'react'
import {View, TextInput, Text} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import createStyles from './styles'
import Button from '../customComponents/Button'
import StatusBar from '../customComponents/MyStatusBar'
import {Actions} from 'react-native-router-flux'
import {adjustPhoneNumber, generateVCard} from './helperFunctions'
import QRCode from 'react-native-qrcode'
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'

const styles = createStyles()

class EditContact extends Component {
  state = {
    firstName: this.props.contact.firstName,
    lastName: this.props.contact.lastName,
    phoneNumber: this.props.contact.phoneNumber,
    instagramUsername: this.props.contact.instagramUsername,
    twitterUsername: this.props.contact.twitterUsername,
    facebookURL: this.props.contact.facebookURL,
    companyName: this.props.contact.companyName,
    title: this.props.contact.title,
    vCard: {'error': false, 'message': ""}
  }

  updateFirstName = (text) => { this.setState({ firstName: text }) }

  updateLastName = (text) => { this.setState({ lastName: text }) }

  updatePhoneNumber = (text) => { this.setState({ phoneNumber: adjustPhoneNumber(text) }) }

  updateInstagramUsername = (text) => { this.setState({ instagramUsername: text }) }

  updateTwitterUsername = (text) => { this.setState({ twitterUsername: text }) }

  updateFacebookID = (text) => { this.setState({ facebookURL: text }) }

  updateCompanyName = (text) => { this.setState({ companyName: text }) }

  updateTitle = (text) => { this.setState({ title: text }) }

  onButtonPress = async () => {
    let contact = {...this.state}
    await this.props.updateContact(contact)
    if (this.props.firstVisit)
      Actions.QRContact({'firstVisit':this.props.firstVisit, contact})
    else // pops current view & refreshes w passed props
      Actions.pop({refresh: {contact}})
  }

  inputs = {}

  focusNextField = (id) => {
    this.inputs[id].focus()
    let vCard = generateVCard({...this.state})
    this.setState({vCard})
  }

  render() {
    let {vCard} = this.state
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.title}>Sqr me</Text>
        <View style={styles.logo}>
          <View style={styles.person}>
            <Icon name="user" color="#47A6D6" size={55} />
          </View>
          <QRCode
            value={vCard.message === "" ? 'https://bit.ly/2XCoUvz' : vCard.message}
            // value={'https://bit.ly/2XCoUvz'}
            size={150}
            bgColor='#47A6D6'
            fgColor='white' />
        </View>
        {/* Update form to be categorized (Name, Phone #, Social, Business)*/}
        <View style={styles.formContainer}>
            <KeyboardAwareScrollView
              extraScrollHeight={-130}>
              <View>
              <TextInput
                autoFocus
                placeholder={'First Name'}
                value={this.state.firstName}
                style={styles.firstNameInput}
                onChangeText={(text) => this.updateFirstName(text)}
                returnKeyType={"next"}
                blurOnSubmit={false}
                onSubmitEditing={() => this.focusNextField('lastNameFocus')}
              />
              <TextInput
                placeholder={'Last Name'}
                value={this.state.lastName}
                style={styles.lastNameInput}
                onChangeText={(text) => this.updateLastName(text)}
                returnKeyType={"next"}
                blurOnSubmit={false}
                ref={input => this.inputs['lastNameFocus'] = input}
                onSubmitEditing={() => this.focusNextField('phoneNumberFocus')}
              />
              <TextInput
                placeholder={'Phone Number'}
                value={this.state.phoneNumber}
                style={styles.phoneNumberInput}
                onChangeText={(text) => this.updatePhoneNumber(text)}
                returnKeyType={"next"}
                blurOnSubmit={false}
                ref={input => this.inputs['phoneNumberFocus'] = input}
                onSubmitEditing={() => this.focusNextField('instagramUsernameFocus')}
              />
              <TextInput
                placeholder={'Instagram Username'}
                value={this.state.instagramUsername}
                style={styles.usernameInput}
                onChangeText={(text) => this.updateInstagramUsername(text)}
                returnKeyType={"next"}
                blurOnSubmit={false}
                ref={input => this.inputs['instagramUsernameFocus'] = input}
                onSubmitEditing={() => this.focusNextField('twitterHandleFocus')}
              />
              <TextInput
                value={this.state.twitterUsername}
                placeholder={'Twitter Username'}
                style={styles.usernameInput}
                onChangeText={(text) => this.updateTwitterUsername(text)}
                returnKeyType={"next"}
                blurOnSubmit={false}
                ref={input => this.inputs['twitterHandleFocus'] = input}
                onSubmitEditing={() => this.focusNextField('facebookIDFocus')}
              />
              <TextInput
                value={this.state.facebookURL}
                placeholder={'Facebook ID'}
                style={styles.facebookInput}
                onChangeText={(text) => this.updateFacebookID(text)}
                returnKeyType={"next"}
                blurOnSubmit={false}
                ref={input => this.inputs['facebookIDFocus'] = input}
                onSubmitEditing={() => this.focusNextField('companyNameFocus')}
              />
              <TextInput
                value={this.state.companyName}
                placeholder={'Company Name'}
                style={styles.companyNameInput}
                onChangeText={(text) => this.updateCompanyName(text)}
                returnKeyType={"next"}
                blurOnSubmit={false}
                ref={input => this.inputs['companyNameFocus'] = input}
                onSubmitEditing={() => this.focusNextField('titleFocus')}
              />
              <TextInput
                value={this.state.title}
                placeholder={'Title'}
                style={styles.titleInput}
                onChangeText={(text) => this.updateTitle(text)}
                returnKeyType={"done"}
                blurOnSubmit={true}
                ref={input => this.inputs['titleFocus'] = input}
                onSubmitEditing={() => this.focusNextField('titleFocus')}
              />
              </View>
            </KeyboardAwareScrollView>
        </View>
          <Button // maybe pass off generated QR here? unless dont wanna dynamically update SQR
            style={styles.button}
            textStyle={styles.buttonText}
            text='Done'
            onPress={() => this.onButtonPress()} />
      </View>
    )
  }
}

EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  firstVisit: PropTypes.bool.isRequired,
  updateContact: PropTypes.func.isRequired
}

export default EditContact
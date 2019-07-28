import React, {Component} from 'react'
import {View, TextInput, Text, TouchableHighlight} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import createStyles from './styles'
import Button from '../customComponents/Button'
import StatusBar from '../customComponents/MyStatusBar'
import {Actions} from 'react-native-router-flux'
import {adjustPhoneNumber, generateVCard} from './helperFunctions'
import QRCode from 'react-native-qrcode'
import Icon from 'react-native-vector-icons/FontAwesome'
import {appName} from '../constants/variables'
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
    vCard: {'error': false, 'message': ''}
  }

  updateFirstName = (text) => { this.setState({ firstName: text }) }

  updateLastName = (text) => { this.setState({ lastName: text }) }

  updatePhoneNumber = (text) => {
    this.setState({ phoneNumber: adjustPhoneNumber(text) })
    if (text.length === 13)
      this.focusNextField('instagramUsernameFocus')
  }

  updateInstagramUsername = (text) => { this.setState({ instagramUsername: text }) }

  updateTwitterUsername = (text) => { this.setState({ twitterUsername: text }) }

  updateFacebookID = (text) => { this.setState({ facebookURL: text }) }

  updateCompanyName = (text) => { this.setState({ companyName: text }) }

  updateTitle = (text) => { this.setState({ title: text }) }

  confirmEdit = async () => {
    let contact = {...this.state}
    if (contact['vCard'] !== undefined)
      delete contact['vCard']

    await this.props.updateContact(contact)

    if (this.props.firstVisit)
      Actions.QRContact({'firstVisit': this.props.firstVisit, contact})
    else // pops current view & refreshes w passed props
      Actions.pop({refresh: {contact}})
  }

  cancelEdit = async () => {
    // this only works when I spread the props.contact, why tho?
    let contact = {...this.props.contact}
    // why does redux erase my memory when I don't run this?
    // shouldn't have to updateContact since it's the same contact
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
    if (this.state.vCard !== vCard)
      this.setState({vCard})
  }

  componentDidMount() {
    if (!this.props.firstVisit)
      this.setState({vCard: generateVCard(this.props.contact)})
  }

  handleKeyPress = (e) => {
    console.log(e)
  }

  render() {
    let {vCard} = this.state
    // let vCard = generateVCard({...this.state})
    // console.log(this.props.firstVisit)
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.title}>{appName}</Text>
        <View style={styles.logo}>
          <TouchableHighlight
            onPress={() => this.confirmEdit()}
            style={styles.person}
            underlayColor="#fff"
            >
            <Icon name="user" color="#47A6D6" size={55} />
          </TouchableHighlight>
          <QRCode
            value={vCard.message === "" ? 'https://bit.ly/2XCoUvz' : vCard.message}
            size={150}
            bgColor='#47A6D6'
            fgColor='white' />
        </View>
        {/* Update form to be categorized (Name, Phone #, Social, Business)*/}
        {this.props.firstVisit === false ?
          // if it's false, then showcase the check or cancel button for editing
          // fix spacing issue here, should be almost on top of each other
          <View style={styles.evenSpaceContainer}>            
            <TouchableHighlight
              onPress={this.cancelEdit}
              style={styles.cancelIcon}
              underlayColor='#fff'>
              <Icon name="times" color="#47A6D6" size={hp('4%')} />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.confirmEdit}
              style={styles.confirmIcon}
              underlayColor='#fff'>
              <Icon name="check" color="#47A6D6" size={hp('4%')} />
            </TouchableHighlight>
          </View>
          :
          null
        }
        <View
          style={{...styles.formContainer, marginTop: this.props.firstVisit === true ? hp('3%') : hp('0%')}}>
            <KeyboardAwareScrollView
              keyboardShouldPersistTaps='never'
              extraScrollHeight={-130}>
              {/* <View> */}
              <TextInput
                // onKeyPress={this.handleKeyPress}
                // keyboardShouldPersistTaps='handled'
                autoFocus={this.props.firstVisit === true ? true : false}
                placeholder={'First Name'}
                value={this.state.firstName}
                style={styles.firstNameInput}
                onChangeText={(text) => this.updateFirstName(text)}
                returnKeyType={"next"}
                blurOnSubmit={false}
                onSubmitEditing={() => this.focusNextField('lastNameFocus')}
              />
              <TextInput
                // keyboardShouldPersistTaps='handled'
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
                // keyboardShouldPersistTaps='handled'
                placeholder={'Phone Number'}
                keyboardType='numeric'
                value={this.state.phoneNumber}
                style={styles.phoneNumberInput}
                onChangeText={(text) => this.updatePhoneNumber(text)}
                returnKeyType={"next"}
                blurOnSubmit={false}
                ref={input => this.inputs['phoneNumberFocus'] = input}
                onSubmitEditing={() => this.focusNextField('instagramUsernameFocus')}
              />
              <TextInput
                // keyboardShouldPersistTaps='handled'
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
              {/* </View> */}
            </KeyboardAwareScrollView>
        </View>
        {this.props.firstVisit === true ?
          <Button // maybe pass off generated QR here? unless dont wanna dynamically update SQR
            style={styles.button}
            textStyle={styles.buttonText}
            text='Sqr Me'
            onPress={() => this.confirmEdit()} />
          :
          null
        }
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
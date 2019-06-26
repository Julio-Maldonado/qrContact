import React, {Component} from 'react'
import {View, TextInput, Image} from 'react-native'
import createStyles from './styles'
import Button from '../customComponents/Button'
import StatusBar from '../customComponents/MyStatusBar'
import {Actions} from 'react-native-router-flux'
import {generateVCard, adjustPhoneNumber} from './helperFunctions'

const styles = createStyles()

export default class EditContact extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    instagramUsername: "",
    twitterUsername: "",
    facebookURL: "",
    companyName: "",
    title: ""
  }

  updateFirstName = (text) => { this.setState({ firstName: text }) }

  updateLastName = (text) => { this.setState({ lastName: text }) }

  updatePhoneNumber = (text) => { this.setState({ phoneNumber: adjustPhoneNumber(text) }) }

  updateInstagramUsername = (text) => { this.setState({ instagramUsername: text }) }

  updateTwitterUsername = (text) => { this.setState({ twitterUsername: text }) }

  updateFacebookURL = (text) => { this.setState({ facebookURL: text }) }

  updateCompanyName = (text) => { this.setState({ companyName: text }) }

  updateTitle = (text) => { this.setState({ title: text }) }

  componentDidMount() {console.log('this.props =', this.props) }

  onButtonPress = () => {
    let {
      firstName,
      lastName,
      phoneNumber,
      instagramUsername,
      twitterUsername,
      facebookURL,
      companyName,
      title
    } = this.state

    let contactData = {
      firstName,
      lastName,
      phoneNumber,
      instagramUsername,
      twitterUsername,
      facebookURL,
      companyName,
      title
    }

    // this.props.updateContact(this.state)
    console.log('this.props.contact =', this.state)
    let qrData = generateVCard(this.props.contact)
    console.log('qrData =', qrData)
    Actions.QRContact({ vCard: qrData, contactData })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Image
          style={styles.image}
          source={require('../assets/simpleQR.png')}
        />
        <View style={styles.form}>
          <TextInput
            style={styles.firstNameInput}
            onChangeText={(text) => this.updateFirstName(text)}
            value={this.state.firstName}
            placeholder={'First Name'}
          />
          <TextInput
            style={styles.lastNameInput}
            onChangeText={(text) => this.updateLastName(text)}
            value={this.state.lastName}
            placeholder={'Last Name'}
          />
          <TextInput
            style={styles.phoneNumberInput}
            onChangeText={(text) => this.updatePhoneNumber(text)}
            value={this.state.phoneNumber}
            placeholder={'Phone Number'}
          />
          <TextInput
            style={styles.usernameInput}
            onChangeText={(text) => this.updateInstagramUsername(text)}
            value={this.state.instagramUsername}
            placeholder={'Instagram Username'}
          />
          <TextInput
            style={styles.usernameInput}
            onChangeText={(text) => this.updateTwitterUsername(text)}
            value={this.state.twitterUsername}
            placeholder={'Twitter Username'}
          />
          <TextInput
            style={styles.facebookInput}
            onChangeText={(text) => this.updateFacebookURL(text)}
            value={this.state.facebookURL}
            placeholder={'Facebook ID'}
          />
          <TextInput
            style={styles.companyNameInput}
            onChangeText={(text) => this.updateCompanyName(text)}
            value={this.state.companyName}
            placeholder={'Company Name'}
          />
          <TextInput
            style={styles.titleInput}
            onChangeText={(text) => this.updateTitle(text)}
            value={this.state.title}
            placeholder={'Title'}
          />
        </View>
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          text='QR my Contact'
          onPress={() => this.onButtonPress()} />
      </View>
    )
  }
}

import React, {Component} from 'react'
import {Text, View} from 'react-native'
import QRCode from 'react-native-qrcode'
import {Actions} from 'react-native-router-flux'
import createStyles from './styles'
import {generateVCard} from './helperFunctions'
import Button from '../customComponents/Button'
import StatusBar from '../customComponents/MyStatusBar'
import PropTypes from 'prop-types'

const styles = createStyles()

const ConditionalText = (props) => {
  let {text, style} = props
  console.log('text =', text)
  return (text !== "") ? <Text style={style}>{`${text}`}</Text> : null
}

class QRContact extends Component {
  onButtonPress = () => {
    // persistor.purge();
    if (this.props.firstVisit)
      Actions.pop()
    else
      Actions.EditContact({...this.props})
  }

  componentWillReceiveProps(props) {
    console.log("QRContact received props =", props)
  }

  render() {
    let {contact} = this.props
    console.log("QRContact rendered this.props =", this.props)
    let vCard = generateVCard(contact)
    // console.log({vCard})
    return (
      <View style={styles.centerContainer}>
        <StatusBar barStyle="dark-content" />
        <QRCode
          value={vCard.message}
          size={300}
          bgColor='#47A6D6'
          fgColor='white' />
        <ConditionalText
          text={`${contact.firstName} ${contact.lastName}`}
          style={styles.boldText} />
        <ConditionalText
          text={contact.phoneNumber}
          style={styles.text} />
        <ConditionalText
          text={contact.instagramUsername}
          style={styles.instagramText} />
        <ConditionalText
          text={contact.twitterUsername}
          style={styles.twitterText} />
        <ConditionalText
          text={contact.facebookURL}
          style={styles.facebookText} />
        <ConditionalText
          text={contact.companyName}
          style={styles.boldText} />
        <ConditionalText
          text={contact.title}
          style={styles.italicText} />
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          text='Edit my SQR'
          onPress={() => this.onButtonPress()} />
      </View>
    )
  }
}

QRContact.propTypes = {
  contact: PropTypes.object.isRequired,
  firstVisit: PropTypes.bool.isRequired
}

export default QRContact
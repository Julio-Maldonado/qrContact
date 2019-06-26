import React, {Component} from 'react'
import {Text, View} from 'react-native'
import QRCode from 'react-native-qrcode'
import createStyles from './styles'
import Button from '../customComponents/Button'
import StatusBar from '../customComponents/MyStatusBar'
import {Actions} from 'react-native-router-flux'

const styles = createStyles()

export default class QRContact extends Component {
  componentDidMount() {
    // contact.photo.attachFromUrl('https://avatars2.githubusercontent.com/u/5659221?v=3&s=460', 'JPEG');
    // contact.workPhone = '312-555-1212';
    // contact.birthday = new Date('01-01-1985');
    // contact.title = 'Software Developer';
    // contact.url = 'https://github.com/enesser';
    // contact.note = 'Notes on Eric';

    // //save to file
    // contact.saveToFile('./eric-nesser.vcf');
    // //get as formatted string
    // console.log(contact.getFormattedString());
    console.log('hey')
  }

  onButtonPress = () => {
    Actions.pop()
  }

  render() {
    let {vCard, contactData} = this.props
    console.log(vCard.message)
    return (
      <View style={styles.centerContainer}>
        <StatusBar barStyle="dark-content" />
        <QRCode
          value={vCard.message}
          size={300}
          bgColor='black'
          fgColor='white'/>
        {contactData.firstName !== undefined ? 
          <Text style={styles.boldText}>{`${contactData.firstName} ${contactData.lastName}`}</Text>
          :
          null
        }
        {contactData.phoneNumber !== undefined ? 
          <Text style={styles.text}>{contactData.phoneNumber}</Text>
          :
          null
        }
        {contactData.instagramUsername !== undefined ? 
          <Text style={styles.facebookText}>{contactData.instagramUsername}</Text>
          :
          null
        }
        {contactData.twitterUsername !== undefined ? 
          <Text style={styles.text}>{contactData.twitterUsername}</Text>
          :
          null
        }
        {contactData.facebookURL !== undefined ? 
          <Text style={styles.instagramText}>{contactData.facebookURL}</Text>
          :
          null
        }
        {contactData.companyName !== undefined ? 
          <Text style={styles.boldText}>{contactData.companyName}</Text>
          :
          null
        }
        {contactData.title !== undefined ? 
          <Text style={styles.italicText}>{contactData.title}</Text>
          :
          null
        }
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          text='Edit my Contact'
          onPress={() => this.onButtonPress()} />
      </View>
    )
  }
}

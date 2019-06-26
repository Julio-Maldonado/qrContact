import React from 'react'
import {StatusBar, View} from 'react-native'

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[{ backgroundColor }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

export default MyStatusBar
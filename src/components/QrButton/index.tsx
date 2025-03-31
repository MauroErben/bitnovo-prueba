import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'
import React, { FC } from 'react'
import QrButtonProps from './types'

const QRIcon = require('../../../assets/images/scan-barcode.png')

const QRButton: FC<QrButtonProps> = ({
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      {...rest}
    >
      <View style={styles.buttonContainer}>
        <Image source={QRIcon} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#035AC5',
    padding: 18,
  }
})

export default QRButton
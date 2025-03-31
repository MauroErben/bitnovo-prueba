import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const PhoneInput = ({
  ...rest
}) => {
  return (
    <TextInput
      style={style.input}
      keyboardType='phone-pad'
      placeholderTextColor='#647184'
      {...rest}
    />
  )
}

const style = StyleSheet.create({
  input: {
    padding: 0,
  }
})

export default PhoneInput
import {
  View,
  Text,
  TextInput as RNInput,
  StyleSheet
} from 'react-native'
import React, { FC } from 'react'
import TextInputProps from './types'

const TextInput: FC<TextInputProps> = ({
  label,
  placeholder,
  length,
  maxLength,
  isFocused,
  ...rest
}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RNInput
        style={[styles.input, { borderColor: isFocused ? '#035AC5' : '#E5E9F2' }]}
        placeholder={placeholder}
        numberOfLines={4}
        placeholderTextColor='#647184'
        maxLength={maxLength}
        multiline
        submitBehavior='blurAndSubmit'
        {...rest}
      />
      {isFocused && (
        <Text style={styles.maxLengthText}>{length}/{maxLength} caracteres</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
    letterSpacing: 1,
    color: '#002859',
    fontFamily: 'Mulish-Bold',
  },
  input: {
    borderWidth: 1,
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderRadius: 6,
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 1,
    color: '#002859',
    fontFamily: 'Mulish-Regular',
  },
  maxLengthText: {
    fontWeight: '400',
    fontSize: 12,
    color: '#647184',
    textAlign: 'right',
    fontFamily: 'Mulish-Regular',
  }
})

export default TextInput;
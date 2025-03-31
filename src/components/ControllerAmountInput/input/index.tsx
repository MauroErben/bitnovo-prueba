import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'
import React, { FC, useContext } from 'react'
import AmountInputProps from './types'
import { CurrencyContext } from '@/src/context/CurrencyContext'
import { currencySymbolEnum } from '@/src/utils/currencySymbolEnum'

const Input: FC<AmountInputProps> = ({
  value,
  isFocused,
  ...rest
}
) => {

  const { currency } = useContext(CurrencyContext)

  const hasValue = Number(value) > 0;

  return (
    <View style={[
      styles.container,
      currency === 'EUR' ? { flexDirection: 'row-reverse' } : {}
    ]}>
      <Text style={[
        styles.inputTextStyle,
        isFocused || hasValue ? { color: '#035AC5' } : { color: '#C0CCDA' }
      ]}>
        {currencySymbolEnum[currency] ?? '$'}
      </Text>
      <TextInput
        style={styles.inputTextStyle}
        placeholder={isFocused ? '' : '0.00'}
        placeholderTextColor='#C0CCDA'
        submitBehavior='blurAndSubmit'
        keyboardType='numeric'
        value={value}
        {...rest}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 64,
  },
  inputTextStyle: {
    fontSize: 40,
    fontWeight: '600',
    fontFamily: 'Mulish-Bold',
    color: '#035AC5'
  }
})

export default Input;
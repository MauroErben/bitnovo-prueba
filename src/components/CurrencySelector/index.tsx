import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import React, { FC } from 'react'
import CurrencySelectorProps from './types'

const ArrowDown = require("../../../assets/images/arrow_down.png")

const CurrencySelector: FC<CurrencySelectorProps> = ({
  onClick,
  currency,
  showBackground = true,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={0.5}
      {...rest}
    >
      <View
        style={[
          styles.container,
          showBackground && { backgroundColor: '#D3DCE64D' },
          !showBackground ? { paddingHorizontal: 0, paddingVertical: 0 } : { paddingHorizontal: 10, paddingVertical: 6 }
        ]}
      >
        <Text style={styles.textCurrency}>{currency}</Text>
        <Image source={ArrowDown} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    borderRadius: 24,
  },
  textCurrency: {
    fontWeight: "700",
    fontSize: 12,
    color: '#002859'
  },
})

export default CurrencySelector
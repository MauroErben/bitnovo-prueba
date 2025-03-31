import { View, Text, StyleSheet, Image } from 'react-native'
import React, { FC } from 'react'
import { PaymentCardDetailProps } from './types'

const PaymentDetailIcon = require('../../../assets/images/payment_details_icon.png')

const PaymentCardDetail: FC<PaymentCardDetailProps> = ({
  amount,
  currencySymbol,
  ...rest
}) => {

  return (
    <View
      style={styles.container}
      {...rest}
    >
      <View style={styles.row}>
        <Image source={PaymentDetailIcon} />
        <View>
          <Text style={styles.title}>Solicitud de pago</Text>
          <View
            style={[styles.rowAmountContainer, currencySymbol !== '€' ? { flexDirection: 'row-reverse' } : {}]}
          >
            <Text style={styles.amountText}>{amount}</Text>
            <Text style={styles.amountText}>{currencySymbol}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.shareClientText}>Comparte el enlace de pago con el cliente</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFC',
    borderRadius: 12,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    fontWeight: '400',
    color: '#647184'
  },
  amountText: {
    fontFamily: 'Mulish-Regular',
    fontSize: 30,
    fontWeight: '600',
    color: '#002859'
  },
  shareClientText: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    fontWeight: '400',
    color: '#647184'
  },
  rowAmountContainer: {
    flexDirection: 'row',
    gap: 4,
  }
})

export default PaymentCardDetail
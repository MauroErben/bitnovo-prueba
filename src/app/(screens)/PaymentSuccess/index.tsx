import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import React from 'react';
import AppContainer from '@/src/components/AppContainer';
import Button from '@/src/components/Button';

const PaymentSuccess = require('../../../../assets/images/payment-success.png')

const PaymentSuccessScreen = () => {

  const onFinishPress = () => alert('Prueba técnica finalizada');

  return (
    <AppContainer>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={PaymentSuccess} />
          <Text style={styles.successText}>Pago recibido</Text>
          <Text style={styles.infoText}>El pago se ha confirmado con éxito</Text>
        </View>
      </View>
      <Button
        variant='secondary'
        onPress={onFinishPress}
      >
        Finalizar
      </Button>
    </AppContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  successText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#002859',
    fontFamily: 'Mulish-Regular'
  },
  infoText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#647184',
    fontFamily: 'Mulish-Regular'
  }
})

export default PaymentSuccessScreen;
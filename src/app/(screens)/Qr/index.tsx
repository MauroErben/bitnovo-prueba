import {
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native'
import React, { useEffect } from 'react'
import AppContainer from '@/src/components/AppContainer'
import { router, useLocalSearchParams } from 'expo-router'
import QRCode from 'react-native-qrcode-svg';

const InfoCircle = require('../../../../assets/images/info-circle.png')
const BitNovo = require('../../../../assets/images/bitnovo-pay-icon.png')

const QrScreen = () => {

  const {
    web_url,
    currencySymbol,
    amount,
    identifier
  } = useLocalSearchParams();


  useEffect(() => {
    const socket = new WebSocket(`wss://payments.pre-bnvo.com/ws/merchant/${identifier}`);
    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.status === 'EX') {
          router.replace('/(screens)/PaymentSuccess')
        }
      } catch (error) {
        alert(error);
      }
    }
    return () => {
      socket.close();
    }
  }, [identifier]);

  return (
    <AppContainer
      customStyles={styles.container}
    >
      <View style={styles.alertContainer}>
        <Image source={InfoCircle} />
        <Text style={styles.alertText}>Escanea el QR y serás redirigido a la pasarela de pago de Bitnovo Pay.</Text>
      </View>
      <View style={styles.qrContainer}>
        <View
          style={styles.qr}
        >
          <QRCode
            size={252}
            logo={BitNovo}
            logoSize={60}
            value={web_url.toString()}
          />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.textAmount}>{amount}</Text>
        <Text style={styles.textAmount}>{currencySymbol}</Text>
      </View>
      <Text style={styles.textInfo}>Esta pantalla se actualizará automáticamente.</Text>
    </AppContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#035AC5',
  },
  alertContainer: {
    backgroundColor: '#EAF3FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 6,
  },
  alertText: {
    fontSize: 12,
    fontFamily: 'Mulish-Regular',
    fontWeight: '400',
    color: '#002859',
  },
  qrContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  qr: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    padding: 12,
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginTop: 24,
  },
  textAmount: {
    fontSize: 26,
    fontFamily: 'Mulish-Regular',
    fontWeight: '700',
    color: '#FFFFFF',
  },
  textInfo: {
    marginTop: 24,
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
  }
})

export default QrScreen
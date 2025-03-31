import React, { useContext, useEffect } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { useForm } from 'react-hook-form'
import * as Linking from 'expo-linking';
import AppContainer from '@/src/components/AppContainer';
import PaymentCardDetail from '@/src/components/PaymentCardDetail';
import ShareBox from '@/src/components/ShareBox';
import CurrencySelector from '@/src/components/CurrencySelector';
import ControllerPhoneInput from '@/src/components/ControllerPhoneInput';
import Button from '@/src/components/Button';
import QRButton from '@/src/components/QrButton';
import { PhoneContext } from '@/src/context/PhoneContext';

const SmsIcon = require('../../../../assets/images/sms.png')
const Link = require('../../../../assets/images/link.png')
const Share = require('../../../../assets/images/share.png')
const Whatsapp = require('../../../../assets/images/whatsapp.png')
const WalletAdd = require('../../../../assets/images/wallet-add.png')

const SharePaymentScreen = () => {

  const {
    amount,
    web_url,
    identifier,
    currencySymbol
  } = useLocalSearchParams();

  const {
    control,
    getValues,
  } = useForm({
    defaultValues: {
      phone: ''
    }
  })

  const { areaCode } = useContext(PhoneContext);

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

  const onSendWhatsappPress = async () => {

    const { phone } = getValues();

    const fullPhone = `${areaCode}${phone}`

    const appUrl = `whatsapp://send?phone=${fullPhone}&text=${web_url}`
    const webUrl = `https://api.whatsapp.com/send?phone=${fullPhone}&text=${encodeURIComponent(web_url.toString())}`;

    try {
      const canOpen = await Linking.canOpenURL(`whatsapp://send?phone=+54${phone}?text=${web_url}`);
      if (canOpen) {
        await Linking.openURL(appUrl);
      } else {
        await Linking.openURL(webUrl);
      }
    } catch (error) {
      alert('Error al abrir WhatsApp');
    }
  }

  const onSendEmailPress = async () => {
    const subject = "Solicitud de pago";
    const body = `Hola, revisa este enlace para realizar el pago: ${web_url}`;

    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      const canOpen = await Linking.canOpenURL(mailtoUrl);
      if (canOpen) {
        await Linking.openURL(mailtoUrl);
      } else {
        alert("No se pudo abrir la aplicación de correo");
      }
    } catch (error) {
      alert("Error al abrir el cliente de correo");
    }
  };


  const onPressQrCode = () => router.navigate({
    pathname: '/(screens)/Qr',
    params: {
      web_url,
      currencySymbol,
      amount,
      identifier,
    }
  })

  const onNewRequestPress = () => router.replace('/(screens)')

  const onChangePhoneNumberPress = () => router.navigate('/(screens)/PhoneModalScreen')

  return (
    <AppContainer>
      <View style={styles.container}>
        <View>
          <PaymentCardDetail
            amount={amount}
            currencySymbol={currencySymbol}
          />
          <View style={styles.shareBoxContainer}>
            <View
              style={styles.qrContainer}
            >
              <ShareBox
                isClickeble={false}
                leftIcon={
                  <Image source={Link} />
                }
              >
                <Text style={styles.text}>{web_url.toString().replace('https://', '')}</Text>
              </ShareBox>
              <QRButton
                onPress={onPressQrCode}
              />
            </View>
            <ShareBox
              onPress={onSendEmailPress}
              leftIcon={
                <Image source={SmsIcon} />
              }
            >
              <Text style={styles.text}>Enviar por correo electrónico</Text>
            </ShareBox>
            <ShareBox
              isClickeble={false}
              leftIcon={
                <Image source={Whatsapp} />
              }
              rightIcon={
                <TouchableOpacity
                  onPress={onSendWhatsappPress}
                >
                  <View style={styles.buttonSendContainer}>
                    <Text style={styles.textButtonSend}>Enviar</Text>
                  </View>
                </TouchableOpacity>
              }
            >
              <View style={styles.selectorContainer}>
                <CurrencySelector
                  onClick={onChangePhoneNumberPress}
                  currency={areaCode}
                  showBackground={false}
                />
                <ControllerPhoneInput
                  control={control}
                  name='phone'
                  placeholder='300 678 9087'
                />
              </View>
            </ShareBox>
            <ShareBox
              leftIcon={
                <Image source={Share} />
              }
            >
              <Text style={styles.text}>Compartir con otras aplicaciones</Text>
            </ShareBox>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={onNewRequestPress}
            variant='secondary'
            rightIcon={
              <Image source={WalletAdd} />
            }
          >
            Nueva solicitud
          </Button>
        </View>
      </View>
    </AppContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    fontWeight: '400',
    color: '#002859',
  },
  shareBoxContainer: {
    marginTop: 20,
    gap: 16,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  buttonSendContainer: {
    backgroundColor: '#035AC5',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  textButtonSend: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Mulish-Bold',
    fontWeight: '600',
  },
  selectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  qrContainer: {
    maxWidth: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
  }
})

export default SharePaymentScreen
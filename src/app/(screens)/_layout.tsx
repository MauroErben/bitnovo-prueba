import React from 'react'
import { Stack } from 'expo-router'
import Header from '@/src/components/Header'
import { Image } from 'react-native'

const BitNovoIcon = require('../../../assets/images/bitnovo-logo.png')

const ScreensLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Crear pago',
          header: (props) => (
            <Header {...props} />
          )
        }}
      />
      <Stack.Screen
        name="CurrencyModalScreen/index"
        options={{
          title: 'Selecciona una divisa',
          header: (props) => (
            <Header
              showCurrencySelector={false}
              {...props}
            />
          ),
          presentation: 'fullScreenModal'
        }}
      />
      <Stack.Screen
        name="PhoneModalScreen/index"
        options={{
          title: 'Seleccionar país',
          header: (props) => (
            <Header
              showCurrencySelector={false}
              {...props}
            />
          ),
          presentation: 'fullScreenModal'
        }}
      />
      <Stack.Screen
        name="SharePayment/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Qr/index"
        options={{
          title: '',
          header: (props) => (
            <Header {...props} showCurrencySelector={false} />
          )
        }}
      />
      <Stack.Screen
        name="PaymentSuccess/index"
        options={{
          title: 'Success',
          header: (props) => (
            <Header
              {...props}
              titleIcon={
                <Image width={88} height={32} source={BitNovoIcon} />
              }
              showCurrencySelector={false}
            />
          )
        }}
      />
    </Stack>
  )
}

export default ScreensLayout
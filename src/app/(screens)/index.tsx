import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { router } from 'expo-router'
import { CurrencyContext } from '@/src/context/CurrencyContext'
import { ordersAdapters } from '@/src/adapters/orders'
import { currencySymbolEnum } from '@/src/utils/currencySymbolEnum'
import AppContainer from '@/src/components/AppContainer'
import ControllerAmountInput from '@/src/components/ControllerAmountInput'
import ControllerTextInput from '@/src/components/ControllerTextInput'
import Button from '@/src/components/Button'

const INPUT_MAX_LENGTH = 140

const createPaymentSchema = z.object({
  amount: z.string().min(1),
  concept: z.string().optional(),
});
type CreatePaymentSchemaType = z.infer<typeof createPaymentSchema>;

const CreatePaymentScreen = () => {

  const {
    control,
    getValues,
    formState: {
      isValid,
    }
  } = useForm<CreatePaymentSchemaType>({
    resolver: zodResolver(createPaymentSchema),
    defaultValues: {
      amount: '',
      concept: '',
    },
    mode: 'onChange'
  });

  const [isLoading, setIsLoading] = useState(false)
  const { currency } = useContext(CurrencyContext);

  const onCreatePaymentOrder = async () => {
    setIsLoading(true);

    const { amount, concept } = getValues();

    await ordersAdapters.createPaymentOrder({
      expected_output_amount: amount,
      notes: concept,
      fiat: currency,
      successCallback: (response) => {
        const { web_url, identifier } = response.data;
        router.replace({
          pathname: '/(screens)/SharePayment',
          params: {
            amount,
            web_url,
            identifier,
            currencySymbol: currencySymbolEnum[currency],
          }
        })
      },
      errorCallback: (error) => {
        alert(error)
      },
      finallyCallback: () => setIsLoading(false),
    })
  }

  return (
    <AppContainer>
      <View style={style.container}>
        <View>
          <ControllerAmountInput
            name='amount'
            control={control}
          />
          <View style={style.conceptInputContainer}>
            <ControllerTextInput
              name='concept'
              control={control}
              label='Concepto'
              placeholder='Añade descipción del pago'
              maxLength={INPUT_MAX_LENGTH}
            />
          </View>
        </View>
        <Button
          onPress={onCreatePaymentOrder}
          isDisabled={!isValid || isLoading}
        >
          Continuar
        </Button>
      </View>
    </AppContainer>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  conceptInputContainer: {
    marginTop: 50,
  }
})

export default CreatePaymentScreen
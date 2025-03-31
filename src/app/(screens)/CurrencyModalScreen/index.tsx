import AppContainer from '@/src/components/AppContainer'
import SelectableList from '@/src/components/SelectableList'
import { FIAT_CURRENCIES_MOCK } from '@/src/mocks/currencyFiatMock'
import React from 'react'

const ModalScreen = () => {

  return (
    <AppContainer>
      <SelectableList data={FIAT_CURRENCIES_MOCK} />
    </AppContainer>
  )
}

export default ModalScreen
import AppContainer from '@/src/components/AppContainer'
import SelectableList from '@/src/components/SelectableList'
import { PHONE_MOCK } from '@/src/mocks/phoneMock'
import React from 'react'

const PhoneScreen = () => {

  return (
    <AppContainer>
      <SelectableList data={PHONE_MOCK} isPhoneSelector />
    </AppContainer>
  )
}

export default PhoneScreen
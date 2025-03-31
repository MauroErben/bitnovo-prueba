import { View, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { AppContainerProps } from './types'

const AppContainer: FC<AppContainerProps> = ({
  customStyles,
  children
}) => {
  return (
    <View
      style={[styles.container, customStyles]}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 19
  }
})

export default AppContainer
import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react'

const SearchIcon = require('../../../../assets/images/search-normal.png')

const SearchInput = ({
  ...rest
}) => {
  return (
    <View
      style={styles.input}
    >
      <View style={styles.row}>
        <Image source={SearchIcon} />
        <TextInput
          placeholder='Buscar'
          {...rest}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderColor: '#E5E9F2'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  }
})

export default SearchInput
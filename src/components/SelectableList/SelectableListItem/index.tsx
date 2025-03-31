import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import React, { FC } from 'react'
import SelectableItemProps from './types';

const ArrowLeft = require('../../../../assets/images/arrow_right.png')
const TickCircle = require('../../../../assets/images/tick-circle.png')

const SelectableItem: FC<SelectableItemProps> = ({
  image,
  title,
  abreviation,
  isSelected,
  onItemPress,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onItemPress}
      activeOpacity={0.5}
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.row}>
          <View
            style={styles.imageContainer}
          >
            <Image
              style={styles.image}
              source={{ uri: image }}
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.abreviation}>{abreviation}</Text>
          </View>
        </View>
        {isSelected ? <Image source={TickCircle} /> : <Image source={ArrowLeft} />}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
  },
  imageContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3DCE64D',
    borderRadius: 24,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  column: {
    gap: 2,
  },
  title: {
    fontWeight: '600',
    color: '#002859',
    fontSize: 14,
    fontFamily: 'Mulish-Bold',
  },
  abreviation: {
    fontWeight: '400',
    color: '#647184',
    fontSize: 12,
    fontFamily: 'Mulish-Regular',
  }
})

export default SelectableItem;
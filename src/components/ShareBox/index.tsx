import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import React, { FC } from 'react'
import { ShareBoxProps } from './types'

const ShareBox: FC<ShareBoxProps> = ({
  leftIcon,
  rightIcon,
  children,
  isClickeble = true,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      disabled={!isClickeble}
    >
      <View
        style={styles.container}
        {...rest}
      >
        <View style={styles.row}>
          {leftIcon && (leftIcon)}
          {children}
        </View>
        <View>
          {rightIcon && (rightIcon)}
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 18,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#D3DCE6',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
})

export default ShareBox
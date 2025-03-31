import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native'
import React, { FC } from 'react'
import { CustomButtonProps } from './types'

const Button: FC<CustomButtonProps> = ({
  children,
  variant = 'primary',
  onPress,
  rightIcon,
  isDisabled,
  ...rest
}) => {

  const disabledStyle = {
    backgroundColor: '#EAF3FF',
    textColor: '#71B0FD'
  }

  const buttonVariantsStyle = {
    primary: {
      backgroundColor: '#035AC5',
      textColor: '#ffffff'
    },
    secondary: {
      backgroundColor: '#F9FAFC',
      textColor: '#035AC5'
    }
  }

  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      activeOpacity={0.5}
      {...rest}
    >
      <View
        style={[styles.buttonContainer, { backgroundColor: buttonVariantsStyle[variant].backgroundColor }, isDisabled && disabledStyle]}
      >
        <Text style={[
          styles.textButton,
          { color: buttonVariantsStyle[variant].textColor },
          isDisabled && { color: disabledStyle.textColor }
        ]}
        >
          {children}
        </Text>
        {rightIcon && (
          rightIcon
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    paddingHorizontal: 24,
    paddingVertical: 18,
    gap: 16
  },
  textButton: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Mulish-Regular'
  }
})


export default Button;
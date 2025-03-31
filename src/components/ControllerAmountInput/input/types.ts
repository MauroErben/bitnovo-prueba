type AmountInputProps = {
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  isFocused?: boolean
}

export default AmountInputProps;
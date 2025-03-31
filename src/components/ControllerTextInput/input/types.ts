type TextInputProps = {
  length?: number;
  maxLength?: number;
  label?: string;
  placeholder?: string;
  value?: string;
  isFocused?: boolean;
  onChangeText?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
};

export default TextInputProps
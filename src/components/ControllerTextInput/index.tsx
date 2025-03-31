import { FC, useState } from 'react';
import { Controller } from 'react-hook-form';
import { IControllerTextInputProps, IRenderInputProps } from './types';
import TextInput from './input';

const ControllerTextInput: FC<IControllerTextInputProps> = (props) => {
  const {
    control,
    name,
    maxLength = 140,
    rules,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const renderInput = ({
    field: {
      onChange,
      onBlur,
      value,
    },
  }: IRenderInputProps) => {

    const onBlurInput = () => {
      setIsFocused(false);
      onBlur()
    }

    const onFocus = () => setIsFocused(true);

    return (
      <TextInput
        value={value}
        onChangeText={onChange}
        onBlur={onBlurInput}
        onFocus={onFocus}
        maxLength={maxLength}
        length={value.length}
        isFocused={isFocused}
        {...rest}
      />
    )
  };

  return (
    <Controller
      control={control}
      name={name}
      render={renderInput}
      rules={rules}
    />
  );
};

export default ControllerTextInput;

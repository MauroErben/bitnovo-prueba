import { FC, useState } from 'react';
import { Controller } from 'react-hook-form';
import { IControllerInputProps, IRenderInputProps } from './types';
import Input from './input';
import { formatAmount } from '@/src/utils';

const ControllerAmountInput: FC<IControllerInputProps> = (props) => {
  const {
    control,
    name,
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
    const onChangeText = (text: string) => {
      const formattedValue = formatAmount(text);
      onChange(formattedValue);
    }

    const onBlurInput = () => {
      setIsFocused(false);
      onBlur();
    }

    const onFocus = () => setIsFocused(true);

    return (
      <Input
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlurInput}
        onFocus={onFocus}
        isFocused={isFocused}
        {...rest}
      />
    );
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

export default ControllerAmountInput;
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { IControllerInputProps, IRenderInputProps } from './types';
import PhoneInput from './phoneInput';

const ControllerPhoneInput: FC<IControllerInputProps> = (props) => {
  const {
    control,
    name,
    rules,
    ...rest
  } = props;

  const renderInput = ({
    field: {
      onChange,
      onBlur,
      value,
    },
  }: IRenderInputProps) => {
    return (
      <PhoneInput
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
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

export default ControllerPhoneInput;
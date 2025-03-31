import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { IControllerInputProps, IRenderInputProps } from './types';
import SearchInput from './input';

const ControllerSearchInput: FC<IControllerInputProps> = (props) => {
  const {
    control,
    name,
    rules,
    onChangeText,
    ...rest
  } = props;

  const renderInput = ({
    field: {
      onChange,
      onBlur,
      value,
    },
  }: IRenderInputProps) => {

    const onChangeTextHandler = (text: string) => {
      onChangeText?.(text);
      onChange(text);
    }

    return (
      <SearchInput
        onChangeText={onChangeTextHandler}
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

export default ControllerSearchInput;
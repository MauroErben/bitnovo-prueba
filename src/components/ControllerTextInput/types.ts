import {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  RegisterOptions,
  UseFormStateReturn,
} from 'react-hook-form';
import TextInputProps from './input/types';

export interface IControllerTextInputProps extends TextInputProps {
    name: string;
    control: Control<any>;
    rules?: RegisterOptions;
  }

export interface IRenderInputProps {
    field: ControllerRenderProps;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FieldValues>;
  }

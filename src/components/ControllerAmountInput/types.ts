
import {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  RegisterOptions,
  UseFormStateReturn,
} from 'react-hook-form';

export interface IControllerInputProps {
    name: string;
    control: Control<any>;
    rules?: RegisterOptions;
  }
export interface IRenderInputProps {
    field: ControllerRenderProps;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FieldValues>;
  }
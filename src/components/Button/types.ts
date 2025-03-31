import { ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onPress?: () => void;
  rightIcon?: ReactNode;
  isDisabled?: boolean
}

export type { CustomButtonProps }
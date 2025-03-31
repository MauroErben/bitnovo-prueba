import { ReactNode } from "react";

type ShareBoxProps = {
  leftIcon: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  isClickeble?: boolean;
  onPress?: () => void
}

export type { ShareBoxProps }
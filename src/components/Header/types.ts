
import { ParamListBase, Route } from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { ReactNode } from 'react';

export type IHeaderProps = {
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
  route: Route<string>;
  options: NativeStackNavigationOptions;
  showCurrencySelector?: boolean;
  titleIcon?: ReactNode;
}

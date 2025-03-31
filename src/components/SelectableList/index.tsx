import { FlatList } from 'react-native'
import React, { FC, useContext } from 'react'
import SelectableItem from './SelectableListItem';
import { router } from 'expo-router';
import { CurrencyContext } from '@/src/context/CurrencyContext';
import { ICurrency } from '@/src/interfaces/currencyFiat';
import { SelectableListProps } from './types';
import { PhoneContext } from '@/src/context/PhoneContext';

const SelectableList: FC<SelectableListProps> = ({
  data,
  isPhoneSelector,
}) => {

  const { currency, setCurrency } = useContext(CurrencyContext);
  const { areaCode, setAreaCode } = useContext(PhoneContext);

  const onItemPress = (value: string) => {
    if (isPhoneSelector) {
      setAreaCode(value);
    } else {
      setCurrency(value);
    }
    router.back()
  }

  const renderCurrencyItem = ({ item }: { item: ICurrency }) => {
    return (
      <SelectableItem
        image={item.image || ''}
        title={item.name || ''}
        abreviation={item.symbol || ''}
        isSelected={isPhoneSelector ? item.name === areaCode : item.symbol === currency}
        onItemPress={() => onItemPress(isPhoneSelector ? item.name || '' : item.symbol || '')}
      />
    );
  };

  const keyExtractor = () => Math.random().toString();

  return (
    <FlatList
      data={data}
      renderItem={renderCurrencyItem}
      keyExtractor={keyExtractor}
    />
  )
}

export default SelectableList
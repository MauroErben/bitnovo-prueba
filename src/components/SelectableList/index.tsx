import { FlatList, StyleSheet, View } from 'react-native'
import React, { FC, useContext, useState } from 'react'
import SelectableItem from './SelectableListItem';
import { router } from 'expo-router';
import { CurrencyContext } from '@/src/context/CurrencyContext';
import { ICurrency } from '@/src/interfaces/currencyFiat';
import { SelectableListProps } from './types';
import { PhoneContext } from '@/src/context/PhoneContext';
import ControllerSearchInput from '../ControllerSearchInput';
import { useForm } from 'react-hook-form';

const SelectableList: FC<SelectableListProps> = ({
  data,
  isPhoneSelector,
}) => {

  const {
    control
  } = useForm({
    defaultValues: {
      search: ''
    }
  })

  const { currency, setCurrency } = useContext(CurrencyContext);
  const { areaCode, setAreaCode } = useContext(PhoneContext);
  const [filteredData, setFilteredData] = useState(data);

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

  const onSearch = (value: string) => {
    const filtered = data.filter((item) =>
      item.name?.toLowerCase().includes(value?.toLowerCase()!) ||
      item.symbol?.toLowerCase().includes(value?.toLowerCase()!)
    );
    setFilteredData(filtered);
  }

  return (
    <View>
      <ControllerSearchInput
        control={control}
        onChangeText={onSearch}
        name='search' />
      <FlatList
        style={styles.flatListStyle}
        data={filteredData}
        renderItem={renderCurrencyItem}
        keyExtractor={keyExtractor}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  flatListStyle: {
    marginTop: 24,
  }
})

export default SelectableList
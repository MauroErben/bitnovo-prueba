import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
import React, {
  FC,
  useContext,
  useEffect,
  useState
} from 'react'
import { IHeaderProps } from './types'
import CurrencySelector from '../CurrencySelector';
import { router } from 'expo-router';
import { CurrencyContext } from '@/src/context/CurrencyContext';

const ArrowLeft = require("../../../assets/images/arrow_left.png")

const Header: FC<IHeaderProps> = ({
  navigation,
  options,
  route,
  titleIcon,
  showCurrencySelector = true,
  ...rest
}) => {

  useEffect(() => {
    setCanGoBack(navigation.canGoBack())
  }, [navigation]);

  const { currency } = useContext(CurrencyContext)
  const [canGoBack, setCanGoBack] = useState(false);

  const onBackPress = () => navigation.goBack();

  const onCurrencySelectorPress = () => router.navigate('/(screens)/CurrencyModalScreen')

  return (
    <View
      style={style.container}
      {...rest}
    >
      <View style={style.backButtonContainer}>
        {canGoBack && (
          <TouchableOpacity
            onPress={onBackPress}
          >
            <View style={style.backButton}>
              <Image source={ArrowLeft} />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View style={style.titleContainer}>
        {titleIcon ? (
          titleIcon
        ) : (
          <Text style={style.title}>{options.title ?? route.name}</Text>
        )}
      </View>
      {showCurrencySelector && (
        <View style={style.CurrencySelectorContainer}>
          <CurrencySelector
            currency={currency}
            onClick={onCurrencySelectorPress}
          />
        </View>
      )}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#cccccc'
  },
  CurrencySelectorContainer: {
    position: 'absolute',
    right: 10
  },
  backButtonContainer: {
    position: 'absolute',
    left: 10,
  },
  backButton: {
    borderRadius: 24,
    backgroundColor: '#EFF2F7',
    padding: 8,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#002859',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Mulish-Bold'
  }
})

export default Header;
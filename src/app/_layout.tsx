import * as SplashScreen from 'expo-splash-screen';
import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { SafeAreaView } from "react-native";
import { useEffect } from 'react';
import { CurrencyProvider } from '../context/CurrencyContext';
import { PhoneProvider } from '../context/PhoneContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded] = useFonts({
    "Mulish-Regular": require("../../assets/fonts/Mulish-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <CurrencyProvider>
      <PhoneProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack>
            <Stack.Screen name="(screens)" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaView>
      </PhoneProvider>
    </CurrencyProvider>
  )
}

import { StatusBar } from 'expo-status-bar';
import { Text } from'react-native'
import React from 'react';
import AppLoading from 'expo-app-loading';

import { 
  useFonts ,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_900Black,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_900Black,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  

  return (
      <>
      <Text>OFonton</Text>
      <StatusBar style="auto" />
      </>
  );
}


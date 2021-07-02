import "react-native-gesture-handler";
import React from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "styled-components";

import {
  useFonts,
  Poppins_400Regular_Italic,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_900Black,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { PlayfairDisplay_700Bold } from "@expo-google-fonts/playfair-display";
import theme from "./src/global/styles/theme";
import { StatusBar } from "react-native";
import { AppRoutes } from "./src/routes/tab.routes";
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular_Italic,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_900Black,
    PlayfairDisplay_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

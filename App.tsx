import React from "react";
import AppLoading from "expo-app-loading";

import { ThemeProvider } from "styled-components";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_900Black,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { PlayfairDisplay_700Bold } from "@expo-google-fonts/playfair-display";
import theme from "./src/global/styles/theme";
import { Home } from "./src/screens/Home";
export default function App() {
  const [fontsLoaded] = useFonts({
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
      <Home />
    </ThemeProvider>
  );
}

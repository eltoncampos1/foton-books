import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Details } from "../screens/Details";
import { Search } from "../screens/Search";

import { HomeRoutes } from "./Home.routes";

const Stack = createStackNavigator();

export function StackRoute() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Details } from "../screens/Details";
import { Search } from "../screens/Search";
import { Home } from "../screens/Home";

import { AppRoutes } from "./tab.routes";
import { Libraries } from "../screens/Libraries";
import { Profile } from "../screens/Profile";

const Stack = createStackNavigator();

export function StackRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
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
      <Stack.Screen
        name="Libraries"
        component={Libraries}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

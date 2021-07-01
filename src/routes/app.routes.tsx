import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { Home } from "../screens/Home";
import { Libraries } from "../screens/Libraries";
import { Profile } from "../screens/Profile";
import { useTheme } from "styled-components";
import { Platform } from "react-native";
const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.selected_icon_color,
        inactiveTintColor: theme.colors.icon_color,
        style: {
          paddingVertical: Platform.OS === "ios" ? 10 : 0,
          height: 59,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Libraries"
        component={Libraries}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="book" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}

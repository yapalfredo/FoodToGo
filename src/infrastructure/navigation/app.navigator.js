import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AccountNavigator } from "./account.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );
}

const createScreenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ focused, color, size }) => {
      const iconName = focused
        ? TAB_ICON[route.name]
        : `${TAB_ICON[route.name]}-outline`;

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    headerShown: false,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

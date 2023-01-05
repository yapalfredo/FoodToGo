import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/retaurants/screens/restaurant.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";

//Loading google fonts
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

function RestaurantScreen() {
  return <RestaurantsScreen />;
}

function MapScreen() {
  return (
    <SafeArea>
      <Text>Maps</Text>
    </SafeArea>
  );
}

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    // <> allows you wrap multiple components
    // side by side without having to wrap them
    // with a specific container
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,

              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Restaurants") {
                  iconName = focused ? "restaurant" : "restaurant-outline";
                } else if (route.name === "Map") {
                  iconName = focused ? "map" : "map-outline";
                } else {
                  iconName = focused ? "settings" : "settings-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Restaurants" component={RestaurantScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/retaurants/screens/restaurant.screen";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";

const RestaurantStack = createStackNavigator();

const RestaurantDetailScreen = () => {
  return (
    <SafeArea>
      <Text>Restaurant Detail</Text>
    </SafeArea>
  );
};

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};

import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/retaurants/screens/restaurant.screen";

export default function App() {
  return (
    // <> allows you wrap multiple components
    // side by side without having to wrap them
    // with a specific container
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { initializeApp, getApps } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { LocationContextProvider } from "./src/services/location/location.context";
//Loading google fonts
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

const firebaseConfig = {
  apiKey: "AIzaSyCotc07DQmmieLcQ3g8sfPGDbdTBRfVpAQ",
  authDomain: "mealstogo-82704.firebaseapp.com",
  projectId: "mealstogo-82704",
  storageBucket: "mealstogo-82704.appspot.com",
  messagingSenderId: "104267053031",
  appId: "1:104267053031:web:6cac4c951ccb2cbe7d2f42",
};

if (!getApps().length) {
  const app = initializeApp(firebaseConfig);
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    signInWithEmailAndPassword(getAuth(), "test@test.com", "test123")
      .then((userCredential) => {
        const user = userCredential.user;
        setIsAuthenticated(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) null;

  if (!isAuthenticated) null;

  return (
    // <> allows you wrap multiple components
    // side by side without having to wrap them
    // with a specific container
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}

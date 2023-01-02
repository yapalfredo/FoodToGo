import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar
} from "react-native";
import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function App() {
  return (
    // <> allows you wrap multiple components
    // side by side without having to wrap them
    // with a specific container
    <> 
      <SafeAreaView style={{flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
        <View style={{padding: 16, backgroundColor: "green"}}  >
          <Text>search</Text>
        </View>
        <View style={{padding:16, backgroundColor: "blue", flex: 1}}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({

});

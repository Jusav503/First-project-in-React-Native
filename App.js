import React from "react";
import { StyleSheet, View, StatusBar, } from "react-native";

import CoinDetailsScreen from "./screens/CoinDetailsScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" />
      <CoinDetailsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", },
});

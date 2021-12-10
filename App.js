import React from "react";
import { StyleSheet, View, StatusBar, } from "react-native";
import Navigation from "./navigation";

export default function App() {
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", },
});

import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import Navigation from "./navigation";
import WatchlistProvider from "./contexts/WatchListContext";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <WatchlistProvider>
      <View style={styles.container}>
        <StatusBar backgroundColor="#000" barStyle="green" />
        <Navigation />
      </View>
    </WatchlistProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212" },
});

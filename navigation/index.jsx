import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CoinDetailsScreen from "../screens/CoinDetailsScreen";
import AddNewAssetScreen from "../screens/AddNewAssetScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer theme={{ colors: { background: "#121212" } }}>
      <Stack.Navigator
        initialRouteName="Root"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen name="Details" component={CoinDetailsScreen} />
        <Stack.Screen name="NewAsset" component={AddNewAssetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

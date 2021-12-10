import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/HomeScreen";
import CoinDetailsScreen from "../screens/CoinDetailsScreen";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer theme={{colors:{background:"#121212"}}}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={CoinDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

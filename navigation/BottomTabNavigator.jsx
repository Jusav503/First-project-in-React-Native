import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import WatchlistScreen from "../screens/WatchListScreen"

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: { backgroundColor: "#181818", paddingBottom: 5 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <AntDesign name="home" size={focused ? 24 : 20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="MyList"
        component={WatchlistScreen}
        options={{  
          tabBarIcon: ({ focused, color }) => (
            <AntDesign name={focused ? "star" : "staro"} size={focused ? 25 : 23} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome5 name={focused ? "user-alt" : "user"} size={focused ? 24 : 20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

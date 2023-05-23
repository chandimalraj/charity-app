import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignupScreen from "../screens/SignupScreen";
import SigninScreen from "../screens/SigninScreen";

const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

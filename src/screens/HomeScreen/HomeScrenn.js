import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../Profile";
import Settings from "../Settings";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MainControlScreen from "../MainControlScreen/MainControlScreen";

const Tab = createBottomTabNavigator();

const HomeScrenn = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#A46DDB" }}
    >
      <Tab.Screen
        name="Home"
        component={MainControlScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="face-man" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="hammer-wrench" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScrenn;

const styles = StyleSheet.create({});

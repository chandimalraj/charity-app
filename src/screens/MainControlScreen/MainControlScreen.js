import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainScreen from "../MainScreen/MainScreen";
import DonationBoard from "../DonationBoard/DonationBoard";
import Donation from "../Donation/Donation";
import { createStackNavigator } from "@react-navigation/stack";
import SponsorScreen from "../SponsorScreen/SponsorScreen";
import RecurringScreen from "../RecurringScreen/RecurringScreen";
import SponsorAmount from "../SponsorAmount/SponsorAmount";
import DonateAmount from "../DonateAmount/DonateAmount";

const Stack = createStackNavigator();

const MainControlScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="DonationBoard" component={DonationBoard} />
      <Stack.Screen name="Donation" component={Donation} />
      <Stack.Screen name="SponsorScreen" component={SponsorScreen} />
      <Stack.Screen name="RecurringScreen" component={RecurringScreen} />
      <Stack.Screen name="SponsorAmount" component={SponsorAmount} />
      <Stack.Screen name="DonateAmount" component={DonateAmount} />
    </Stack.Navigator>
  );
};

export default MainControlScreen;

const styles = StyleSheet.create({});

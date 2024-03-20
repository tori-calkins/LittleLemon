import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="welcome">
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="subscribe" component={SubscribeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
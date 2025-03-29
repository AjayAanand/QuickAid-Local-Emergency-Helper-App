import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
/**
 * Auth navigator param list
 */
export type OutsideNavigator = {
  "My Vehicles Screen": undefined;
};

/**
 * Default props for  screens
 */
export type OutsideNavigatorParamList<T extends keyof OutsideNavigator> = {
  navigation: NativeStackNavigationProp<OutsideNavigator, T>;
  route: RouteProp<OutsideNavigator, T>;
};

const Stack = createStackNavigator<OutsideNavigator>();

const OutsideStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <></>
    </Stack.Navigator>
  );
};

export default OutsideStack;
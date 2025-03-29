import React, { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RouteProp, useNavigation } from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import { Animated, AppStateStatus, AppState } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import HomeScreen from '../screens/main/Home/HomeScreen';
import SosScreen from '../screens/main/SOS/SosScreen';
import AccountScreen from '../screens/main/Account/AccountScreen';

/**
 * Main navigator param list
 */
export type MainNavigator = {
  Home:  any;
  Sos: any;
  Account: any;
};

/**
 * Default props for Main screens
 */
export type MainNavigatorProps<T extends keyof MainNavigator> = {
  navigation: BottomTabNavigationProp<MainNavigator, T>;
  route: RouteProp<MainNavigator, T>;
};

const Tab = createBottomTabNavigator<MainNavigator>();

const MainStack = () => {
  const insets = useSafeAreaInsets();
  const straightEdges = insets.bottom === 0;
  const [animationValue] = useState(new Animated.Value(0));
  const [appState, setAppState] = useState<AppStateStatus>(AppState.currentState);
  const navigation = useNavigation<StackNavigationProp<any>>();


  useEffect(() => {
    const animateBar = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animationValue, {
            toValue: 1,
            duration: 2000, // Move up in 2 seconds
            useNativeDriver: false,
          }),
          Animated.timing(animationValue, {
            toValue: 0,
            duration: 2000, // Move down in 2 seconds
            useNativeDriver: false,
          }),
        ]),
        { iterations: -1 }, // Infinite loop
      ).start();
    };

    animateBar();

    return () => {
      animationValue.stopAnimation();
    };
  }, [animationValue]);

  return (
    <>
      <Tab.Navigator
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Sos" component={SosScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </>
  );
};

export default MainStack;

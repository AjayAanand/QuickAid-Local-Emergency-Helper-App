import React, { useContext, useEffect, useState } from 'react';
import {
	createNativeStackNavigator,
	NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainStack, { MainNavigator } from './mainNavigator';
import OutsideStack, { OutsideNavigator } from './outsideNavigator';

/**
 * Outside navigator param list
 */
export type GeneralNavigator = {
	Main: MainNavigator;
	Outside: OutsideNavigator;
};

/**
 * Outside props for Main screens
 */
export type GeneralNavigatorProps<T extends keyof GeneralNavigator> = {
	navigation: NativeStackNavigationProp<GeneralNavigator, T>;
	route: RouteProp<GeneralNavigator, T>;
};

const Stack = createNativeStackNavigator<GeneralNavigator>();

const GeneralStack = () => {


	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Main" component={MainStack} />
					<Stack.Screen name="Outside" component={OutsideStack} />
		</Stack.Navigator>
	);
};

export default GeneralStack;

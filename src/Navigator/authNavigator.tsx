import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/login';


/**
 * Auth navigator param list
 */
export type AuthNavigator = {
	Login: undefined;
	Otp: {loginId: number;
	phoneNo: string;} | undefined;
};

const Stack = createStackNavigator<AuthNavigator>();

const AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{
            headerShown: false,
        }} initialRouteName="Login">
			<Stack.Screen name="Login" component={LoginScreen} />
		</Stack.Navigator>
	);
};

export default AuthStack;

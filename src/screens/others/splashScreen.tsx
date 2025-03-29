import React, { useEffect, useRef } from 'react';
import { View, Animated, Text } from 'react-native';

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);
  

  return (
    <View>
      <Text style={{fontSize:23}}>Quick Helper</Text>
    </View>
  );
};

export default SplashScreen;

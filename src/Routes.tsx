import React, { useContext, useMemo, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./screens/others/splashScreen";
import AuthStack from "./Navigator/authNavigator";
import GeneralStack from "./Navigator/generalNavigator";
import { MainContext } from "./provider/mainProvider";
import { useColorScheme, View } from "react-native";
enum Stack {
    Splash,
    Auth,
    Main,
  }

const Routes = () => {
    const theme = useColorScheme();
    const [stack, setStack] = useState<Stack>(Stack.Splash);
    const { isLoggedIn } = useContext(MainContext);
    const slowSetStack = (newState: Stack) =>
      setTimeout(() => setStack(newState), 1500);
    useMemo(() => {
      if (isLoggedIn === null) setStack(Stack.Splash);
      else if (isLoggedIn === false) slowSetStack(Stack.Auth);
      else slowSetStack(Stack.Main);
    }, [isLoggedIn]);

    return(
        <View style={{flex:1}}>
        <NavigationContainer  
        >
                <GeneralStack  />
        </NavigationContainer>
    </View>
    )
}
export default Routes;
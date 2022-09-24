import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
// import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import SettingStack from "./SettingStack/SettingStack";

const RootNavigator = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#ffff"
    },
  };
  const Stack = createStackNavigator();
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName="SettingStack"
      >
        {/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}

        <Stack.Screen name="MainStack" component={MainStack} />
        <Stack.Screen name="SettingStack" component={SettingStack} /> 
        {/* {/* <Stack.Screen name="Chat" component={Chat} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

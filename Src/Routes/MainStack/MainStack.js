import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../Utils/Colors";
import Profile from "../../Screens/Main/Profile";
import Favorite from "../../Screens/Main/Favorite";
import Live from "../../Screens/Main/Live";
import Home from "../../Screens/Main/Home";
import CustomText from "../../Components/CustomText";
import { View } from "react-native";
import styled from "react-native-styled-components";
import ChannelScreen from "../../Screens/Main/ChannelScreen";
const MainStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
        backgroundColor: "#910C0D",
        borderColor: "#910C0D",
          // opacity: "0.9",
          height: verticalScale(60),
        },
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Profile") {
            iconName = "user";
            size = focused ? 25 : 22;
          } else if (route.name === "Favorite") {
            iconName = "heart";
            size = focused ? 25 : 22;
          } else if (route.name === "Home") {
            iconName = "home";
            size = focused ? 25 : 22;
          } else if (route.name === "AddNew") {
            iconName = "plus-square";
            size = focused ? 25 : 22;
          } else if (route.name === "Live") {
            iconName = "live-tv";
            size = focused ? 25 : 22;
            return (
              <BottomTabIcon>
              <MaterialIcons
                name={iconName}
                size={moderateScale(size)}
                color={color}
              />
              <CustomText label={route.name} color={colors.white}/>
            </BottomTabIcon>
            );
          }

          return (
            <BottomTabIcon>
              <Feather name={iconName} size={moderateScale(size)} color={color} />
              <CustomText label={route.name} color={colors.white}/>
            </BottomTabIcon>
          );
        },
      })}
      // activeColor="#f0edf6"
      // inactiveColor="#3e2465"
      // barStyle={{ padding:100 }}
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "#fff",
        // activeBackgroundColor: "#fff",
        showIcon: true,
        
      }}
      initialRouteName="ChannelScreen"
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Live" component={Live} />
      <Tab.Screen name="AddNew" component={Favorite} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen
        name="ChannelScreen"
        component={ChannelScreen}
        options={{
          tabBarItemStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStack;

const BottomTabIcon=styled(View,{
  justifyContent:"center", alignItems:"center"
})

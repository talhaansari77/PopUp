import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../../Home";
import Profile from "../../Profile";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../Utils/Colors";
import TopHome from "./TopHome";

const Tab = createMaterialTopTabNavigator();
const TopNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: colors.black,
          height: verticalScale(40),
          marginHorizontal: scale(10),
          elevation: 0,
        },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 100 },
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.white,
        },
      })}
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "#fff",
      }}
    >
      <Tab.Screen name="Home" component={TopHome} />
      <Tab.Screen name="All Videos" component={Profile} />
      <Tab.Screen name="Tv Show" component={Profile} />
      <Tab.Screen name="Movie" component={Profile} />
      <Tab.Screen name="Animation" component={Profile} />
      <Tab.Screen name="Playlist" component={Profile} />
    </Tab.Navigator>
  );
};

export default TopNav;

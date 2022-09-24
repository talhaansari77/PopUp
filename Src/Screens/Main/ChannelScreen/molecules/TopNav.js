import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../../Home";
import Profile from "../../Profile";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../Utils/Colors";
import TopHome from "./TopHome";
import AllVideos from "./AllVideos";
import CustomText from "../../../../Components/CustomText";

const Tab = createMaterialTopTabNavigator();
const TopNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: colors.black,
          height: verticalScale(32),
          marginHorizontal: scale(10),
          elevation: 0,
        },
        tabBarAllowFontScaling: true,
        
        tabBarLabel: () => {
          let screenName='';
          if (route.name === "Home") {
            screenName='Home'
          } 
          else if (route.name === "AllVideos") {
            screenName='All Videos'
          }
          else if (route.name === "TvShow") {
            screenName='Tv Show'
          }
          else if (route.name === "Movie") {
            screenName='Movie'
          }
          else if (route.name === "Animation") {
            screenName='Animation'
          }
          else if (route.name === "Playlist") {
            screenName='Playlist'
          }
          return <CustomText label={screenName} color={colors.white} />;
        },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 85 },
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
      <Tab.Screen name="AllVideos" component={AllVideos} />
      <Tab.Screen name="TvShow" component={Profile} />
      <Tab.Screen name="Movie" component={Profile} />
      <Tab.Screen name="Animation" component={Profile} />
      <Tab.Screen name="Playlist" component={Profile} />
    </Tab.Navigator>
  );
};

export default TopNav;

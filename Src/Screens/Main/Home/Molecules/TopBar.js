import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { colors } from "../../../../Utils/Colors";
import icons from "../../../../../Assets/Icons";
import styled from "react-native-styled-components";

const TopBar = () => {
  return (
    // <SafeAreaView>
    <Main style={{ backgroundColor: colors.primary, height: 90 }}>
      <LeftTopBar>
        <AntDesign name="left" color={colors.white} size={30} />
        <Image source={icons.PopUp} size={30} />
      </LeftTopBar>
      <View>
        <Feather name={"bell"} color={colors.white} size={30} />
      </View>
    </Main>
    // <View></View>
    // </SafeAreaView>
  );
};

const Main = styled(View,{
    display: 'flex',
    flexDirection: "row",
    backgroundColor: colors.black,
    justifyContent: "space-between",
    padding: 20
})

const LeftTopBar = styled(View, {
    display: 'flex',
    flexDirection: "row",
})

export default TopBar;



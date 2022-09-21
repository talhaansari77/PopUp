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
    <Main>
      <LeftTopBar>
        <AntDesign name="left" color={colors.white} size={22} style={{marginTop: 13}} />
        {/* <Image source={icons.PopUp} size={33} /> */}
        <Text>Pop up Tv Remote</Text>
      </LeftTopBar>
      <RightTopBar>
        <Feather name={"bell"} color={colors.white} size={30} />
      </RightTopBar>
    </Main>
    // <View></View>
    // </SafeAreaView>
  );
};

const Main = styled(View,{
    display: 'flex',
    flexDirection: "row",
    backgroundColor: colors.primary,
    height: 95,
    justifyContent: "space-between",
    padding: 20
})

const LeftTopBar = styled(View, {
    display: 'flex',
    flexDirection: "row",
    marginTop: 12,

})

const RightTopBar = styled(View , {
    marginTop: 20
})

export default TopBar;



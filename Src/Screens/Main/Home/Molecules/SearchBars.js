import { View, Text } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "../../../../Utils/Colors";
import { verticalScale } from "react-native-size-matters";
import styled from "react-native-styled-components";

const SearchBars = () => {
  return (
    <MainSearchBar>
      <Searchbar
        placeholder="Search Your Favourite tv Channel"
        inputStyle={{fontSize:14,color:colors.white}}
        style={{ backgroundColor: colors.lightBlack, height: 40, borderRadius: 7, opacity: 0.5, }}
        // leftIconContainerStyle = {() =>
        //   <Feather name={"search"} color={colors.white} size={30} />
        // }
        // searchIcon = {() =>
        //   <Feather name={"search"} color={colors.white} size={30} />
        // }
        placeholderTextColor={colors.white}
        icon={() => <Feather name={"search"} color={colors.white} size={25} />}
      
      />
       {/* <Feather name={"mic"} color={colors.white} size={30} /> */}
    </MainSearchBar>
  );
  
};

const MainSearchBar = styled(View,{
  width: "100%",
  padding: 20
})

export default SearchBars;

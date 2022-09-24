import { View, Text, Image } from "react-native";
import React from "react";
// import Channels from '../../../../../Assets/Channels'
import styled from "react-native-styled-components";
import Channels from "../../../../../Assets/Channels";
import movies from "../../../../../Assets/Movies";

const Banner = () => {
  return (
    <View>
      <Image
        style={{ width: "100%",}}
        source={movies.darkMovie}
        resizeMode={"cover"}
      />
    </View>
  );
};

export default Banner;

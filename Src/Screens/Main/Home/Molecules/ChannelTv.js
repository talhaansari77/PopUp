import { View, Text, Image } from "react-native";
import React from "react";
import CustomText from "../../../../Components/CustomText";
import { colors } from "../../../../Utils/Colors";
import Channels from "../../../../../Assets/Channels";
import styled from "react-native-styled-components";

const ChannelTv = () => {
  return (
    <MainChannel>
      <ChannelHeader>
        <CustomText fontSize={"15"} fontWeight={"900"} color={colors.white}>
          Tv Channel
        </CustomText>
        <CustomText
          fontSize={"10"}
          fontWeight={"700"}
          color={colors.gray}
          marginTop="5"
        >
          See All{" "}
        </CustomText>
      </ChannelHeader>

      <Channel>
        <View>
        <View>
          <Image source={Channels.Netflix} />
        </View>
        <View style={{backgroundColor: colors.lightBlack, height: 40, alignItems:'center'}}> 
        <CustomText label="Netflix" fontSize={"20"}  color={colors.white} />
        </View>
        </View>

        <View>
          <Image source={Channels.Netflix} />
        </View>

        <View>
          <Image source={Channels.Netflix} />
        </View>

        <View>
          <Image source={Channels.Netflix} />
        </View>
      </Channel>
    </MainChannel>
  );
};

const MainChannel = styled(View, {
  width: "100%",
  padding: 20,
});

const ChannelHeader = styled(View, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const Channel = styled(View, {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 10,
  justifyContent: "space-between",
});

export default ChannelTv;

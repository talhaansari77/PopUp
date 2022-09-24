import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import CustomText from "../../../../Components/CustomText";
import { colors } from "../../../../Utils/Colors";
import Channels from "../../../../../Assets/Channels";
import styled from "react-native-styled-components";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../../Components/Spacer";

const ChannelTv = () => {
  return (
    <>
      <MainChannel>
        <ChannelHeader>
          <CustomText
            fontSize={"15"}
            fontFamily={"inter"}
            fontWeight={"900"}
            color={colors.white}
          >
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
          {[1, 2, 3, 5].map(() => (
            <ChannelContainer>
              <View style={{ width: "100%", height: verticalScale(80) }}>
                <Image
                  source={Channels.Netflix}
                  resizeMode={"stretch"}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <ChannelNameContainer
              >
                <CustomText
                  label="Netflix"
                  fontSize={"20"}
                  color={colors.white}
                />
              </ChannelNameContainer>
            </ChannelContainer>
          ))}
        </Channel>
        <Spacer height={10} />
        <CustomText
          label={"Favorite Tv Channels"}
          fontSize={"15"}
          fontFamily={"inter"}
          fontWeight={"900"}
          color={colors.white}
        />
        <Spacer height={10} />
      </MainChannel>
      <PL20>
        <ScrollView horizontal>
          {[1, 2, 3, 5].map(() => (
            <>
              <View>
                <View style={{ width: "100%" }}>
                  <Image source={Channels.Netflix} resizeMode={"contain"} />
                </View>
                <ChannelNameContainer>
                  <CustomText
                    label="Netflix"
                    fontSize={"20"}
                    color={colors.white}
                  />
                </ChannelNameContainer>
              </View>
              <Spacer width={10} />
            </>
          ))}
        </ScrollView>
      </PL20>
    </>
  );
};

const MainChannel = styled(View, {
  width: "100%",
  padding: 20,
});
const PL20 = styled(View, {
  width: "100%",
  paddingLeft: 20,
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
  // paddingRight: 20,
});
const ChannelContainer = styled(View, {
  width: Dimensions.get("window").width / 2.3,
  marginVertical: verticalScale(5),
});
const ChannelNameContainer = styled(View, {
  backgroundColor: colors.lightBlack,
  height: 40,
  alignItems: "center",
  justifyContent:"center",
  width: "100%",
});

export default ChannelTv;

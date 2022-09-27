import { View, Text, Image, Platform } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "../../../../Utils/Colors";
import styled from "react-native-styled-components";
import movies from "../../../../../Assets/Movies";
import CustomText from "../../../../Components/CustomText";
import { scale } from "react-native-size-matters";
import { Divider } from "react-native-elements";
import icons from "../../../../../Assets/Icons";
import { ScrollView } from "react-native-gesture-handler";

const SearchList = ({ search, setSearch, filerList }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {filerList.map((list, index) => (
          <Main>
            <View style={{ flex: 1.25, alignSelf: "center" }}>
              {list.circle}
            </View>

            <View style={{ flex: 8.25 }}>
              <InnerMain>
                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                  <Image source={list.MovieLogo} resizeMode={"contain"} />
                  <CustomText
                    label={list.name}
                    fontSize={15}
                    color={colors.white}
                    marginLeft={10}
                    fontWeight={"500"}
                  />
                </View>

                <View style={{ paddingTop: 4, marginBottom: 3 }}>
                  <Image
                    source={list.Thumbnail}
                    style={{ height: 53, width: 85 }}
                  />
                </View>
              </InnerMain>
              <Shadow />
            </View>

            <View style={{ flex: 0.5, alignSelf: "center" }}>
              {list.leftArrow}
            </View>
          </Main>
        ))}
      </View>
    </ScrollView>
  );
};

const Main = styled(View, {
  display: "flex",
  flexDirection: "row",
  marginTop: scale(20),
});

const InnerMain = styled(View, {
  flexDirection: "row",
  display: "flex",
  justifyContent: "space-between",
});

const Shadow = styled(View, {
  height: 1,
  width: "100%",
  backgroundColor: colors.black,
  shadowColor: "#E1E8F1",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.9,
  shadowRadius: 3,

  elevation: 24,
});

export default SearchList;

import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import ProfileNav from "../../../Components/ProfileNav";
import CustomText from "../../../Components/CustomText";
import Ionicons from "react-native-vector-icons/Ionicons";
import styled from "react-native-styled-components";
import { colors } from "../../../Utils/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import { Divider } from "react-native-elements";
import { Spacer } from "../../../Components/Spacer";

const settingList = [
  { id: 1, name: "App Settings" },
  { id: 2, name: "Account" },
  { id: 3, name: "Help" },
  { id: 4, name: "Location: USA" },
  { id: 5, name: "Language: English" },
  { id: 6, name: "Switch Account" },
  { id: 7, name: "Send Feedback" },
  { id: 8, name: "Sign Out" },
];

const Profile = () => {
  return (
    <Container>
      <Spacer height={30} />
      <ProfileNav
        LeftSide={() => (
          <Row>
            <PH10>
              <Ionicons
                name="chevron-back-outline"
                size={25}
                color={colors.white}
              />
            </PH10>
            <CustomText label={"Profile"} color={colors.white} fontSize={20}  />
            <Divider color={colors.white} />
          </Row>
        )}
      />
      {/* manage Accounts */}
      <Spacer height={20} />
      <PV10>
        <PH10>
          <Row>
            <ProfileImage activeOpacity={0.6}>
              <Image
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
                source={{
                  uri: "https://i.pinimg.com/originals/99/bb/f1/99bbf1fc914ad9fcaea4c7a10fffabe9.png",
                }}
              />
            </ProfileImage>
            <Spacer width={18} />
            <View>
              <CustomText label={"NAME"} color={colors.white} fontSize={20} />
              <Spacer height={6} />
              <CustomText
                label={"Manage Your Account"}
                color={colors.link}
                fontSize={13}
              />
            </View>
          </Row>
        </PH10>
      </PV10>
      {/*  */}
      <Spacer height={20} />
      <PH45>
        {settingList.map((item) => (
          <TouchableOpacity activeOpacity={0.7}>
            <PV10>
              <CustomText
                label={item.name}
                color={colors.white}
                fontSize={12}
              />
            </PV10>
          </TouchableOpacity>
        ))}
      </PH45>
    </Container>
  );
};

export default Profile;

const Container = styled(View, {
  backgroundColor: colors.black,
  flex: 1,
});
const PH10 = styled(View, {
  paddingHorizontal: scale(10),
});
const PH45 = styled(View, {
  paddingHorizontal: scale(45),
});
const PV10 = styled(View, {
  paddingVertical: verticalScale(10),
});
const Row = styled(View, {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});
const ProfileImage = styled(TouchableOpacity, {
  height: 100,
  width: 100,
  borderRadius: 50,
  overflow: "hidden",
  // backgroundColor:colors.white
});

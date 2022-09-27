import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../../../Utils/Colors";
import { ScaledSheet } from "react-native-size-matters";
import CustomText from "../../../../Components/CustomText";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

const DaysList = ({ icon, txt2, txt1, item, count, setCount }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        setCount(item.id);
      }}
    >
      <View
        activeOpacity={0.6}
        colors={[count == colors.lightBlack, count == colors.lightBlack]}
        style={[
          styles.mainContainer,
          {
            // backgroundColor:"",
            borderWidth: 1,
            borderColor: colors.primary,
          },
        ]}
      >
        <CustomText
          fontSize={"14"}
          fontWeight={"500"}
          color={count == item.id ? colors.primary : colors.gray}
          fontFamily="inter"
          label={txt1}
        ></CustomText>
        {icon ? (
          <Ionicons
            name={"checkmark-circle-outline"}
            color={count == item.id ? colors.primary : colors.gray}
            size={27}
          />
        ) : (
          <CustomText
            fontSize={"14"}
            fontWeight={"500"}
            //   color={count == item.id ? colors.primary : colors.gray}
            fontFamily="inter"
            label={txt2}
          ></CustomText>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default DaysList;

const styles = ScaledSheet.create({
  mainContainer: {
    width: "60@s",
    height: "55@vs",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginHorizontal: 10,
    marginTop: 8,
  },
});

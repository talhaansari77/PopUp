import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Banner from "./molecules/Banner";
import TopBar from "./molecules/TopBar";
import MainBody from "./molecules/MainBody";
import DaysContainer from "./molecules/DaysContainer";

const AddReminder = () => {
  return (
    <View>
      <TopBar />
      <Banner />
      <MainBody />
     
    </View>
  );
};

export default AddReminder;

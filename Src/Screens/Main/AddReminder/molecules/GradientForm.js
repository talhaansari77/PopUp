import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { colors } from '../../../../Utils/Colors';

const GradientForm = (props) => {
  return (
    <>
      <LinearGradient
            activeOpacity={0.6}
            colors={[colors.primary, colors.lightBlack]}
            padding={0.6}
            paddingLeft={2.9}
            paddingRight={2.9}
            borderRadius={10}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          >
            {props.childern}
          </LinearGradient>
    </>
  )
}

export default GradientForm
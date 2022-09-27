import { View, Text, Image } from 'react-native'
import React from 'react'
import Channels from '../../../../../Assets/Channels'
import styled from 'react-native-styled-components'
import { verticalScale } from 'react-native-size-matters'

const Banner = () => {
  return (
    <BannerContainer>
      <Image source={Channels.Banner} resizeMode={"stretch"}/>
    </BannerContainer>
  )
}

export default Banner

const BannerContainer=styled(View,{
    height:129,
    backgroundColor:"red",
    marginTop:3
})
import { View, Text } from 'react-native'
import React from 'react'
import TopBar from './Molecules/TopBar'
import { colors } from '../../../Utils/Colors'
import SearchBars from './Molecules/SearchBars'
import ChannelTv from './Molecules/ChannelTv'

const Home = () => {
  return (
    <View style={{backgroundColor: colors.black, flex: 1}}>
      <TopBar />
      <SearchBars />
      <ChannelTv />
    </View>
  )
}

export default Home
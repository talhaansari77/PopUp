import { View, Text } from 'react-native'
import React from 'react'
import TopBar from './Molecules/TopBar'
import { colors } from '../../../Utils/Colors'

const Home = () => {
  return (
    <View style={{backgroundColor: colors.black, flex: 1}}>
      <TopBar />
      <Text>Home</Text>
    </View>
  )
}

export default Home
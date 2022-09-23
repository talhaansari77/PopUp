import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../../../Components/CustomText'
import { colors } from '../../../../Utils/Colors'
import { ScaledSheet, verticalScale,moderateScale } from 'react-native-size-matters'
import { LinearGradient } from 'expo-linear-gradient'
import Feather from "react-native-vector-icons/Feather";


const Calender = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.date}>
            <CustomText
        fontSize={"14"}
        label="August, 22"
        fontWeight={"600"}
        color={colors.white}
        fontFamily="inter"
      />
          <CustomText
        fontSize={"10"}
        label="10 shows today"
        fontWeight={"600"}
        color={colors.gray}
        fontFamily="inter"
      />
                
     

        </View>
        <LinearGradient style={styles.calender}
colors={['#B13025', '#28100DFC',]} > 

<Feather
        name="calendar"
        color={colors.white}
        size={moderateScale(30)}
        // onPress={onPress}
      />

        </LinearGradient>
    </View>
  )
}

export default Calender

const styles = ScaledSheet.create({
    mainContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:30,
        justifyContent:"space-between",
        marginLeft:verticalScale(25),
        marginRight:verticalScale(10),


    },
    date:{
        width:"50%"

    },
    calender:{
        width:55,
        height:55,
        borderRadius:99,
        shadowColor:"#B13025",
        shadowRadius:3,
        elevation: 20,
        alignItems:"center",
        justifyContent:"center",
        shadowOpacity: 0.9,


        shadowOffset:{width:2,height:2}
    }
    

})
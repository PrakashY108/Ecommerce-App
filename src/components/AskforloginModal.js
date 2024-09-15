import { Modal, StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
import { useNavigation } from '@react-navigation/native'

export default function AskforloginModal() {
    const navigation =useNavigation()
  return (
   
      <Modal  transparent style={styles.modal}>
        <View style={styles.conatiner}>
           <Button onPress={navigation.navigate("Login")} title={"Login"}/>
           <Button onclick={navigation.navigate("Signup")} title={"Sign Up"}/>
           </View>
      </Modal>
   
  )
}

const styles = StyleSheet.create({
     modal:{
        height:"100%",
        width:"100%",
        position:'absolute',
        top:0,
        right:0,
        alignItems:'center',
        justifyContent:"center",
        
     },
     conatiner:{
        height:250,
        width:400,
        borderColor:'black',
        borderRadius:5,
        backgroundColor:'#fff3ff',
        alignSelf:'center',
        alignContent:"center",
        marginTop:"60%",
        justifyContent:'center',
        paddingLeft:"18%"
     }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'

export default function Notification() {
  const navigation= useNavigation()
  return (
    <View style={styles.container}>
       <Header leftIcon={require("../assets/menu.png")} onpress={navigation.openDrawer} title="Notifications" rightIcon={require("../assets/cart.png")} />
      <Text style={styles.text}> No Notifications</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"center",
    
  },
  text:{
    alignItems:'center',
  }
})
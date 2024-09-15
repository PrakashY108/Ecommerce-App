import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

export default function Orders() {
 const navigation= useNavigation()
  
  return (
    <View>
       <Header leftIcon={require("../assets/menu.png")} title="Orders" rightIcon={require("../assets/cart.png")} onpress={navigation.openDrawer}/>
      <Text> No Orders</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'

export default function Orders() {
 
  
  return (
    <View>
       <Header leftIcon={require("../assets/menu.png")} title="Orders" rightIcon={require("../assets/cart.png")} />
      <Text>Orders</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
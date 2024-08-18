import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

export default function Notification() {
  return (
    <View>
       <Header leftIcon={require("../assets/menu.png")} title="Notifications" rightIcon={require("../assets/cart.png")} />
      <Text>Notification</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

export default function Profile() {
  return (
    <View>
       <Header leftIcon={require("../assets/menu.png")} title="Profile" rightIcon={require("../assets/cart.png")} />
      <Text>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
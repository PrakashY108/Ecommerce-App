import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'

export default function Orders() {
  const products = useSelector(state=>state)
  console.log(JSON.stringify(products.product.data));
  
  return (
    <View>
     <Text>{JSON.stringify(products.product.data)}</Text>
       <Header leftIcon={require("../assets/menu.png")} title="Orders" rightIcon={require("../assets/cart.png")} />
      <Text>Orders</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Wishlist() {
    const wishlist = useSelector(state =>state)
    const wishlistLength = wishlist?.data?.length || 0;
    console.log(JSON.stringify(wishlist) + wishlistLength);
    
  return (
    <View>
      <Text>Wishlist</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function QuantityUpdate({qty}) {
  return (
    <View style={{ flexDirection: "row", height: 40,alignItems:'center'}}>
    <TouchableOpacity onPress={()=>qty = qty-1} style={styles.conatin}><Text style={{fontWeight:"black"}}>-</Text></TouchableOpacity>
    <Text style={{ padding: 5,fontWeight:"700"}}>{qty}</Text>
    <TouchableOpacity onPress={()=>qty = qty+1} style={styles.conatin}><Text style={{fontWeight:"black"}}>+</Text></TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    conatin: {
        borderWidth: 0.5,
        borderColor: "black",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        margin: 2,
        zIndex:1
      },
})
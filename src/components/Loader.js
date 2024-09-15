import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loader({message}) {
    return (
        <View style={{ height: 500, alignItems: "center", justifyContent: "center", alignContent: "center",position:"absolute", zIndex:1,alignSelf:"center"}}>
            <ActivityIndicator size={"large"} color={"green"} />
            <Text style={{ color: "blue",fontSize:20}}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
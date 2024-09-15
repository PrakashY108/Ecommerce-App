import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loader() {
    return (
        <View style={{ height: 500, alignItems: "center", justifyContent: "center", alignContent: "center" }}>
            <ActivityIndicator size={"large"} color={"green"} />
            <Text style={{ color: "blue",fontSize:20}}>  Please Wait...</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
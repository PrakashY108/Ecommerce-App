import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function CustomButton({title, onclick}) {
    return (
        <TouchableOpacity style ={styles.btn} onPress={onclick}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        height:50,
        width:170,
        color:"white",
        backgroundColor:"orange",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30,
        marginHorizontal:20,
        marginVertical:10


    }
})
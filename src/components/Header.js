import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function Header({ leftIcon, title, rightIcon,onpress }) {
    const navigation = useNavigation();
    return (
        <View style={styles.headercontainer}>
            <TouchableOpacity onPress={()=>onpress()}>
                <Image style={styles.headerLeftImg} source={leftIcon} />
            </TouchableOpacity>
            <Text style={styles.headertitle}>{title}</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Carts")}>
                <Image style={styles.headerRightImg} source={rightIcon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headercontainer: {
        height: 60,
        width: Dimensions.get("window").width,
        backgroundColor: "lightblue",
        top: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerLeftImg: {
        height: 30,
        width: 30,
        margin: 5,
        tintColor:"grey"
    },
    headerRightImg: {
        height: 30,
        width: 30,
        margin: 5,
         tintColor:"grey"
    },
    headertitle: {
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20
    },

})
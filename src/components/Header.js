import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

export default function Header({ leftIcon, title, rightIcon, onpress }) {
    const itemcount = useSelector(state => state.cart.data.length || 0)
    const navigation = useNavigation();
    
    return (
        <View style={styles.headercontainer}>
            <TouchableOpacity onPress={() => onpress()}>
                <Image style={styles.headerLeftImg} source={leftIcon} />
            </TouchableOpacity>
            <Text style={styles.headertitle}>{title}</Text>
            {rightIcon ? (
                <TouchableOpacity onPress={() => navigation.navigate("Carts")}>
                    <Image style={styles.headerRightImg} source={rightIcon} />
                    {itemcount !== 0 ? (
                        <View style={styles.itemcount}>
                            <Text style={styles.itemcountnumber}>{itemcount}</Text>
                        </View>
                    ) :null}
                </TouchableOpacity>
            ) :<View></View>}
        </View>
    )
}

const styles = StyleSheet.create({
    headercontainer: {
        height: 60,
        width: "100%",
        backgroundColor: "lightblue",
        top: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal:15
    },
    headerLeftImg: {
        height: 30,
        width: 30,
        margin: 5,
        tintColor: "black"
    },
    headerRightImg: {
        height: 30,
        width: 30,
        margin: 5,
        tintColor: "black"
    },
    headertitle: {
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        color: "black"
    },
    itemcount: {
        height: 18,
        width: 18,
        borderRadius: 9,
        backgroundColor: "black",
        position: "absolute",
        right: 2,
        top: 2,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
    },
    itemcountnumber: {
        color: "white",
        fontSize: 10,
        fontWeight: "700"
    }
})

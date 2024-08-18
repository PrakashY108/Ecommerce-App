import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

export default function Home() {
    const data = [{
        id  :1,
        title: "hello i am title"
    }, {
        id  :2,
        title: "hello i am title2"
    },
     {
        id  :3,
        title: "hello i am title3"
    },
     {
        id  :4,
        title: "hello i am title3"
    },
     {
        id  :5,
        title: "hello i am title3"
    },
     {
        id  :6,
        title: "hello i am title3"
    },
     {
        id  :7,
        title: "hello i am title3"
    },
     {
        id  :8,
        title: "hello i am title3"
    },

    ]
    return (
        <>
         <Header leftIcon={require("../assets/menu.png")} title="Grocery app" rightIcon={require("../assets/cart.png")} />
        <View>
            <FlatList 
            data={data} 
            keyExtractor={(item) => item.id} 
            renderItem={({ item }) => (
              <View style={styles.cards}>
                <Text>{item.title}</Text>
              </View>
            )}
          />
          </View>
        </>
    )
}

const styles = StyleSheet.create({
    cards:{
        height:100,
        width:"99%",
        backgroundColor:"white",
        borderColor:"#ffffff",
        borderWidth:1,
        margin:2,

    }
})
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                if (!res.ok) {
                    console.log("Error while fetching");
                } else {
                    return res.json()
                }
            })
            .then(result => {
                setProducts(result)
                console.log(result)
            })
            .catch(err => console.log("Error while fetching", err)
            )
    }
    useEffect(() => {
        getProducts();
    }, [])
    const data = [{
        id: 1,
        title: "hello i am title"
    }, {
        id: 2,
        title: "hello i am title2"
    },
    {
        id: 3,
        title: "hello i am title3"
    },
    {
        id: 4,
        title: "hello i am title3"
    },
    {
        id: 5,
        title: "hello i am title3"
    },
    {
        id: 6,
        title: "hello i am title3"
    },
    {
        id: 7,
        title: "hello i am title3"
    },
    {
        id: 8,
        title: "hello i am title3"
    },

    ]

    return (
        <>
            <Header leftIcon={require("../assets/menu.png")} onpress={navigation.openDrawer} title="Grocery app" rightIcon={require("../assets/cart.png")} />
            <View>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { item })} style={styles.cards}>
                            <Image style={styles.cardimg} source={{ uri: item.image }} />
                            <Text style={styles.cardtitle} >{`${item.title.substring(0, 30)}...`}</Text>
                            <Text style={styles.carddescription}>{`${item.description.substring(0, 40)}...`}</Text>
                            <Text style={[styles.carddescription, { color: "green", fontSize: 18 }]}>{`$ ${item.price}`}</Text>
                            <Text style={[styles.carddescription, { fontWeight: "00" }]}>{`Rating : ${item.rating.rate}(${item.rating.count})`}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    cards: {
        height: 300,
        width: "50%",
        backgroundColor: "white",
        borderColor: "white",
        borderWidth: 1,
        margin: 5,
        top: 0,
        alignContent: "center",
        alignItems: "center",
        padding: 3

    },
    cardimg: {
        height: "50%",
        width: "70%",
        resizeMode: "contain"
    },
    cardtitle: {
        fontWeight: "900",
        paddingTop: 10,
        color: "black",
        fontSize: 15
    },
    carddescription: {
        paddingBottom: 5,

    }
})
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addproducts } from '../redux/slices/ProductsSlice';

export default function Home() {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                if (!res.ok) {
                    console.log("Error while fetching ");
                } else {
                    return res.json()
                }
            })
            .then(result => {
                setProducts(result)
                dispatch(addproducts(result))
            })
            .catch(err => console.log("Error while fetching :", err.message)
            )
    }
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
            <Header leftIcon={require("../assets/menu.png")} onpress={navigation.openDrawer} title="Shopping App" rightIcon={require("../assets/cart.png")} />
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
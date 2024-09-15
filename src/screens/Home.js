import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addproducts } from '../redux/slices/ProductsSlice';
import { addToWishlist } from '../redux/slices/WishlistSlice';
import Loading from '../components/Loader';



export default function Home() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const [wishlist, setWishlist] = useState({});
    const [errorMessage, setErrorMessage] = useState({});
    const [errorVisibilty, setErrorVisibilty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handlewishlist = (item) => {
        if (!wishlist[item.id]) {
            dispatch(addToWishlist(item));
            setWishlist(prev => ({ ...prev, [item.id]: true }));
        } else {
            setWishlist(prev => {
                const updated = { ...prev };
                delete updated[item.id];
                return updated;
            });
        }
    };

    const getProducts = () => {
        setIsLoading(true)
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((res) => {
                if (!res.ok) {
                    console.log("Error while fetching ");
                    setErrorMessage({ fetchError: "Error while fetching " })
                    setErrorMessage(true)
                    setIsLoading(false)
                } else {
                    setIsLoading(false)
                    return res.json();
                }
            })
            .then(result => {
                setErrorMessage({})
                console.log(result);
                result.forEach(item => item.qty = 1);
                setProducts(result);
                dispatch(addproducts(result));
                setIsLoading(false)
            })
            .catch((error) => {
                setErrorMessage({ fetchError: "Error while fetching products " })
                setErrorVisibilty(true)
                setIsLoading(false)
            })
    };

    useEffect(() => {
        getProducts();
    }, []);


    const displayError = () => (
        <View style={styles.errorcontainer}>
            <Text style={styles.errormessage}>{Object.values(errorMessage)[0]}</Text>
            <TouchableOpacity onPress={() => setErrorVisibilty(false)}>
                <Image style={styles.errorclose} source={require("../assets/close.png")} />
            </TouchableOpacity>
        </View>)


    return (
        <>
            <Header leftIcon={require("../assets/menu.png")} onpress={navigation.openDrawer} title="Shopping App" rightIcon={require("../assets/cart.png")} />
            {isLoading && <Loading />}
            
            {errorVisibilty ? Object.keys(errorMessage).length > 0 && displayError() : null}
            <View style={styles.container}>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { item })} style={styles.cards}>
                            <View style={{ flexDirection: 'row', height: "60%", width: "100%" }}>
                                <Image style={styles.cardimg} source={{ uri: item.images.length > 0 ? item.images[0] : item.image }} />
                                <Image style={styles.cardimg} source={{ uri: item.images.length > 0 ? item.images[0] : null }} />
                            </View>
                            <Text style={styles.cardtitle}>{`${item.title.substring(0, 30)}...`}</Text>
                            <Text style={styles.carddescription}>{`${item.description.substring(0, 40)}...`}</Text>
                            <Text style={[styles.carddescription, { color: "green", fontSize: 18 }]}>{`$ ${item.price}`}</Text>
                            {/* <Text style={[styles.carddescription, { fontWeight: "400" }]}>{`Rating : ${item.rating.rate}(${item.rating.count})`}</Text> */}
                            <TouchableOpacity onPress={() => handlewishlist(item)}>
                                <Image style={styles.heart} source={wishlist[item.id] ? require("../assets/heart_fill.png") : require("../assets/heart.png")} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    cards: {
        height: 300,
        width: 200,
        backgroundColor: "white",
        borderColor: "grey",
        borderWidth: 0.2,
        top: 0,
        alignContent: "center",
        alignItems: "center",
        padding: 15

    },
    row: {
        flex: 1,
        justifyContent: 'space-between'
    },
    cardimg: {
        height: "100%",
        width: "50%",
        resizeMode: "contain",

    },
    cardtitle: {
        fontWeight: "900",
        padding: 10,
        color: "black",
        fontSize: 15,

    },
    carddescription: {
        paddingBottom: 5,
    },
    heart: {
        position: "absolute",
        height: 30,
        width: 30,
        top: -200,
        right: -90
    },
    errorcontainer: {
        height: 30,
        width: "90%",
        backgroundColor: "yellow",
        color: "white",
        position: 'absolute',
        bottom: 50
        , left: 0,
        zIndex: 1,
        margin: 20,
        borderRadius: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: 'row',
        gap: 50,
        paddingLeft: 30,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: 'red'
    },
    errormessage: {
        color: "red",
        fontSize: 17,
    },
    errorclose: {
        height: 17,
        width: 17
    }
})
import { StyleSheet, Text, ScrollView, Image, View, Dimensions, TouchableOpacity, Modal, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/WishlistSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addToCart } from '../redux/slices/CartSlice';

export default function ProductDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const item = route.params.item;
  const [quantity, setQuantity] = useState(1);
  const [clicked, setClicked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false)

  const dispatch = useDispatch();

  const checkUserStatus = async (item) => {
    // const accessToken = await AsyncStorage.getItem("accessToken");
    // if (!accessToken) {
    //   console.log("Please Login First");
      
    //   setIsModalVisible(true)

    // } else {
    //   dispatch(addToCart(item));
    // }
    dispatch(addToCart(item));
  };

  const handleLoginModal=()=>{
    setIsModalVisible(false)
    navigation.navigate("Login")
  }
  const handleSignupModal=()=>{
    setIsModalVisible(false)
    navigation.navigate("Signup")
  }
  const handleWishlist = async () => {
    const accessToken = await AsyncStorage.getItem("accessToken");
    if (!accessToken) {
      console.log("Please Login First")
      setIsModalVisible(true)

    } else {
      setClicked(!clicked);
      dispatch(addToWishlist(item));
    }
  };


  return (
    <>
      <Header
        leftIcon={require("../assets/back.png")}
        onpress={navigation.goBack}
        title={"Product Details"}
        rightIcon={require("../assets/cart.png")}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Modal transparent visible={isModalVisible} style={styles.modal}>
          <View style={styles.conatiner}>
            <TouchableOpacity style={styles.btn} onPress={handleLoginModal}>
              <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={handleSignupModal}>
              <Text>SignUp</Text>
            </TouchableOpacity></View>
        </Modal>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ borderColor: "red", height: 350, width: "100%" }}
        >
          {item.images.map((imageUrl, index) => (
            <Image key={index} style={styles.image} source={{ uri: imageUrl }} />
          ))}
        </ScrollView>
        <TouchableOpacity onPress={handleWishlist}>
          <Image
            style={styles.heart}
            source={!clicked ? require("../assets/heart.png") : require("../assets/heart_fill.png")}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{item.title.substring(0, 400)}</Text>
        <Text style={styles.description}>{item.description.substring(0, 1000)}</Text>
        <View style={styles.container}>
          <Text style={[styles.title, { color: "green", fontSize: 23 }]}>{`$ ${item.price.toFixed(2)}`}</Text>
          <View style={{ flexDirection: "row", height: 40, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => setQuantity(quantity - 1)} style={styles.conatin}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={{ padding: 5 }}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.conatin}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.btn} onPress={() => checkUserStatus(item)}>
          <Text style={styles.btnText}>Add To Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => checkUserStatus(item)}>
          <Text style={styles.btnText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  modal: {
    height: 300,
    width: "90%",
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: "center",

  },
  conatiner: {
    height: 200,
    width: 300,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: "60%",
    justifyContent: 'center',
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: "100%",
    width: Dimensions.get("screen").width,
    resizeMode: "contain",
  },
  title: {
    fontWeight: "900",
    paddingTop: 10,
    color: "black",
    fontSize: 15,
    marginLeft: 30,
  },
  description: {
    marginHorizontal: 20,
  },
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  conatin: {
    borderWidth: 1.3,
    borderColor: "black",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    margin: 2,
  },
  btncontainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  btn: {
    height: 50,
    width: 150,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  heart: {
    position: "absolute",
    height: 30,
    width: 30,
    top: -200,
    right: 12,
  },
});

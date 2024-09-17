import { StyleSheet, FlatList, View, TouchableOpacity, Image, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import QuantityUpdate from '../components/QuantityUpdate';
import CustomButton from '../components/CustomButton';
import { removeFromCart,clearCart } from '../redux/slices/CartSlice';
import { placeOrder } from '../redux/slices/OrderSlice';

export default function Carts() {
  const data = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const items = data.data.length || 0;
  const [totalPrice, setTotalPrice] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const total = data.data.reduce((accumulator, currValue) => {
      return accumulator + (currValue.price * currValue.qty); 
    }, 0);
    setTotalPrice(total);
  }, [data]); 

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleBuyNow = () => {
    dispatch(placeOrder({ items: data.data, totalPrice }));

    dispatch(clearCart()); 

    navigation.navigate("Orders");
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { item })} style={styles.cards}>
      <Image style={styles.cardimg} source={{ uri: item.images[0] }} />
      <View style={{ width: "60%" }}>
        <Text style={styles.cardtitle}>{item.title.substring(0, 40)}...</Text>
        <Text style={styles.carddescription}>{item.description.substring(0, 40)}...</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: 'center' }}>
          <Text style={[styles.carddescription, { color: "green", fontSize: 18 }]}>{`$ ${item.price}`}</Text>
          <QuantityUpdate qty={item.qty} />
        </View>
        <View style={{ width: 100, alignItems: "center", justifyContent: 'center' }}>
          <Button
            title="Remove"
            color="red"
            onPress={() => handleRemoveFromCart(item)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ height: 700 }}>
      <View>
        <Header leftIcon={require("../assets/back.png")} onpress={navigation.goBack} title={"Cart "} />
        <FlatList
          data={data.data} // Use data directly
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.cartfooter}>
        <View>
          <Text style={styles.text}>Items: {items}</Text>
          <Text style={styles.text}>Total Price: ${totalPrice}</Text>
        </View>
        <CustomButton title={"Buy Now"} onpress={handleBuyNow} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cards: {
    height: 150,
    width: "100%",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    alignContent: "center",
    alignItems: "center",
    padding: 3,
    flexDirection: "row"
  },
  cardimg: {
    height: "100%",
    width: "35%",
    resizeMode: "contain",
    borderWidth: .5,
    borderColor: "black",
    marginRight: 10
  },
  cardtitle: {
    fontWeight: "900",
    color: "black",
    fontSize: 15,
  },
  carddescription: {
    color: "black",
    paddingBottom: 5,
  },
  cartfooter: {
    height: 70,
    width: '100%',
    backgroundColor: 'lightblue',
    position: 'absolute',
    bottom: -15,
    zIndex: 1,
    justifyContent: "space-evenly",
    flexDirection: 'row',
    alignItems: "center"
  },
  text: {
    fontSize: 17,
    color: "black",
    fontWeight: "400",
  },
});

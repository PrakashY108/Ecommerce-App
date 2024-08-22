import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

export default function Wishlist() {
  const item= useSelector(state => state.wishlist)
  const navigation = useNavigation()
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    setWishlist(item.data || []);
  }, [item.data]);
  const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { item })} style={styles.cards}>
        <Image style={styles.cardimg} source={{ uri: item.image }} />
        <View style={{paddingRight:20,width:200}}>
        <Text style={styles.cardtitle} >{item.title.substring(0,40)}...</Text>
        <Text style={styles.carddescription}>{item.description.substring(0,40)}...</Text>
        </View>
        <Text style={[styles.carddescription, { color: "green", fontSize: 18 }]}>{`$ ${item.price}`}</Text>
      
      </TouchableOpacity>
     
    );
  return (
    <View>
<Header leftIcon={require("../assets/back.png")} onpress={()=>navigation.goBack} title="WishList" rightIcon={require("../assets/cart.png")}/>
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  
  )
}

const styles = StyleSheet.create({
  cards: {
    height: 100,
    width: "40%",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    margin: 5,
    top: 0,
    alignContent: "center",
    alignItems: "center",
    padding: 3,
    flexDirection:"row"

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

  },
})
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
   
        
        <Image style={styles.cardimg} source={{ uri: item.category.image }} />
        <View style={{width:"60%"}}>
        <Text style={styles.cardtitle} >{item.title.substring(0,40)}...</Text>
        <Text style={styles.carddescription}>{item.description.substring(0,40)}...</Text>
        <Text style={[styles.carddescription, { color: "green", fontSize: 18 }]}>{`$ ${item.price}`}</Text>
        </View>
      
      </TouchableOpacity>
     
    );
  return (
    <View>
<Header leftIcon={require("../assets/menu.png")} onpress={navigation.openDrawer} title="WishList" rightIcon={require("../assets/cart.png")}/>
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
    height: 120,
    width: "100%",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    top: 0,
    alignContent: "center",
    alignItems: "center",
    padding: 3,
    flexDirection:"row"

  },
  cardimg: {
    height: "100%",
    backgroundColor: "white",
    width: "35%",
    resizeMode: "contain",
    borderWidth:.5,
    borderColor:"black",
    marginRight:10
  },
  cardtitle: {
    fontWeight: "900",
    backgroundColor: "white",
    paddingTop: 0,
    color: "black",
    fontSize: 15,
 
  },
  carddescription: {
    backgroundColor: "white",
    paddingBottom: 5,

  },
})
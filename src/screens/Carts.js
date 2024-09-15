import { StyleSheet, FlatList, View, TouchableOpacity, Image, Text, Button, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
import QuantityUpdate from '../components/QuantityUpdate'
import CustomButton from '../components/CustomButton'

export default function Carts() {
  const data = useSelector(state => state.cart)
  const items= data.data.length||0
  const [addeditem, setAddedItem] = useState([])
  const [totalprice, settotalprice] = useState(0)
  const navigation = useNavigation()
  useEffect(() => {
    setAddedItem(data.data)
  }, [])

  const pricedata=()=>{addeditem.reduce((accumulator,currvalue)=>{
   const total= accumulator + currvalue.price;
   settotalprice(total);
   
  }),0}
  const renderItem = ({ item }) => {
    return (
    
      <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { item })} style={styles.cards}>
        <Image style={styles.cardimg} source={{ uri: item.images[0] }} />
        <View style={{ width: "60%" }}>
          <Text style={styles.cardtitle} >{item.title.substring(0, 40)}...</Text>
          <Text style={styles.carddescription}>{item.description.substring(0, 40)}...</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: 'center' }}>
            <Text style={[styles.carddescription, { color: "green", fontSize: 18 }]}>{`$ ${item.price}`}</Text>
            <QuantityUpdate qty={item.qty} /></View>
        </View>
        
      </TouchableOpacity>

    );
  }

  return (
    <View style={{height:700}}>
    <View >
      <Header leftIcon={require("../assets/back.png")} onpress={navigation.goBack} title={"Cart "} />
      <FlatList data={addeditem}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
    <View style={styles.cartfooter}>
        <Button title='Calculate' onPress={()=>pricedata()}/>
        <View><Text style={styles.text}> Items :{items}</Text>
        <Text style={styles.text}> Total Price :{totalprice}</Text></View>
        <CustomButton title={"Check Out"}/>
      </View></View>
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
    flexDirection: "row"

  },
  cardimg: {
    height: "100%",
    backgroundColor: "white",
    width: "35%",
    resizeMode: "contain",
    borderWidth: .5,
    borderColor: "black",
    marginRight: 10
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
  cartfooter:{
    height:70,
    width:'100%',
    backgroundColor:'lightblue',
    position:'absolute',
    bottom:-15,
    zIndex:1,
    justifyContent:"space-evenly",
    flexDirection:'row',
    alignItems:"center"
  },
  text:{
    fontSize:17,
    color:"black",
    fontWeight:"700",
    
  },

})
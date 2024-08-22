import { StyleSheet, FlatList, View,TouchableOpacity,Image,Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'

export default function Carts() {
  const data = useSelector(state=>state.cart)
  const [addeditem,setAddedItem] = useState([])
const navigation =useNavigation()
  useEffect(()=>{
    setAddedItem(data.data)
  },[])
  const renderItem = ({ item }) =>{
    console.log(item.image);
     return(
      <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { item })} style={styles.cards}>
               <Image style={styles.cardimg} source={{ uri:item.image }}/>
        <View style={{paddingRight:20,width:210}}>
        <Text style={styles.cardtitle} >{item.title.substring(0,40)}...</Text>
        <Text style={styles.carddescription}>{item.description.substring(0,40)}...</Text>
        </View>
        <Text style={[styles.carddescription, { color: "green", fontSize: 18 }]}>{`$ ${item.price}`}</Text>
      
      </TouchableOpacity>
     
    );}
  
  return (
    <View>
      <Header leftIcon={require("../assets/back.png")} onpress={navigation.goBack} title={"Cart "} />
    <FlatList data={addeditem}
  keyExtractor={item=> item.id}
  renderItem={renderItem}
    />
    </View>
  )
}

const styles = StyleSheet.create({})
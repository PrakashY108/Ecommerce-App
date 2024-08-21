import { StyleSheet, Text, ScrollView,Image,View, Button} from 'react-native'
import React, { useState } from 'react'
import {useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';


export default function ProductDetails() {
    const route = useRoute();
    const navigation=useNavigation()
    const item = route.params.item
    const [quantity,setQuantity]= useState(1)
  return (<>
  <Header leftIcon={require("../assets/back.png")} onpress={navigation.goBack} title={"Product Details"} rightIcon={require("../assets/cart.png")}/>
    <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={{uri:item.image}}/>
      <Text style={styles.title}>{item.title.substring(0,400)}</Text>
      <Text style={styles.description}>{item.description.substring(0,1000)}</Text>
      <View style={styles.container}>
        <Text style={[styles.title,{color:"green",fontSize:23}]}>{`$ ${item.price.toFixed(2)}`}</Text>
        <View style={{flexDirection:"row",height:40}}>
        <TouchableOpacity onPress={()=>setQuantity(count=>count-1)} style={styles.conatin}><Text>-</Text></TouchableOpacity>
        <Text style={[styles.conatin,{padding:5}]}>{quantity}</Text>
        <TouchableOpacity onPress={()=>setQuantity(count=>count+1)} style={styles.conatin}><Text>+</Text></TouchableOpacity>
        </View>
      </View>

    </ScrollView>
      <View style={styles.btn}>
        <CustomButton title ={"Buy now"} onclick={()=>console.log("hi")
        }/>
        <CustomButton title ={"Add to Cart"} onclick={()=>console.log("hi")
        }/>
       
      </View>
      </>
  )
}

const styles = StyleSheet.create({
    image:{
        height:400,
        width:"100%",
        resizeMode:"contain"
    },
   title: {
        fontWeight: "900",
        paddingTop: 10,
        color: "black",
        fontSize: 15,
        marginLeft:30
    },
    description: {
        marginHorizontal: 20,

    },
    container:{
        flexDirection:"row",
        justifyContent:"space-evenly",
   
        
    },
    conatin:{
        borderWidth:3,
        borderColor:"black",
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center",
        padding:5,
        margin:2
    },
    btn:{
        flexDirection:"row",
        position:"absolute",
        bottom:0,
       justifyContent:"space-evenly"
    }
})
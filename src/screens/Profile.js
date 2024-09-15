import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function Profile() {
  const navigation = useNavigation()
  return (
    <>
      <Header leftIcon={require("../assets/menu.png")} title="Profile" onpress={navigation.openDrawer} rightIcon={require("../assets/cart.png")} />
      <ScrollView>
        <View style={styles.profilecontainer}>
          <Image style={styles.profileimg} source={require("../assets/user_fill.png")} />
          <Text style={styles.username}>Prakash1223</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.detailscontainer}>
            <Text style={styles.text}> Name    </Text>
            <Text style={styles.detailtext}>Prakash Yadav </Text>
          </View>
          <View style={styles.detailscontainer}>
            <Text style={styles.text}>Email Id </Text>
            <Text style={styles.detailtext}>prakashyadav@gmail.com</Text>
          </View>
          <View style={styles.detailscontainer}>
            <Text style={styles.text}>Phone No</Text>
            <Text style={styles.detailtext}>945634636</Text>
          </View>
        </View>
      </ScrollView></>
  )
}

const styles = StyleSheet.create({
  profileimg: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 1,


  },
  profilecontainer: {
    height: 250,
    width: "100%",
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'lightblue'

  },
  username: {
    margin: 10,
    color: 'white',
    fontSize: 25,
    fontWeight: "800",

  },
  container: {
    height: 400,
    width: "98%",
    backgroundColor: 'white',
    margin: '1%',
    paddingHorizontal:20,
    paddingTop:10
  },
  detailscontainer: {
    flexDirection: 'row',
    gap: 30
  },
  text:{
    fontSize:15,
    fontWeight:"600",
    color:'black'
  },
  detailtext:{
    color:"blue",
    fontSize:20,
    fontWeight:"900",
  }
})
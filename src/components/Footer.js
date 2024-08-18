import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import Orders from '../screens/Orders'
import Notification from '../screens/Notification'
import Profile from '../screens/Profile'
import Home from '../screens/Home'

export default function Footer() {
  const [selected, setselected] = useState(0)

  return (
    <>
   {selected==0?<Home/>:null}
   {selected==1?<Orders/>:null}
   {selected==2?<Notification/>:null}
   {selected==3?<Profile/>:null}
    <View style={styles.bottomcontainer}>
      <TouchableOpacity onPress={() => setselected(0)}>
        <Image style={styles.icons} source={selected != 0 ? require("../assets/home.png") : require("../assets/home_fill.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setselected(1)}>
        <Image style={styles.icons} source={selected != 1 ? require("../assets/orders.png") : require("../assets/orders.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setselected(2)}>
        <Image style={styles.icons} source={selected != 2 ? require("../assets/notification.png") : require("../assets/notification_fill.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setselected(3)}>
        <Image style={styles.icons} source={selected != 3 ? require("../assets/user.png") : require("../assets/user_fill.png")} />
      </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  bottomcontainer: {
    position: "absolute",
    bottom: 0,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    height: 50,
    flexDirection: 'row'
  },
  icons: {
    height: 30,
    width: 30

  }
})
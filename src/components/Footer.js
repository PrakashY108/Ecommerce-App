import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native'
import React, { useState } from 'react'
import Orders from '../screens/Orders'
import Notification from '../screens/Notification'
import Profile from '../screens/Profile'
import Home from '../screens/Home'
import Wishlist from '../screens/Wishlist'
import { useSelector } from 'react-redux'

export default function Footer() {
  const [selected, setselected] = useState(0)
  const item = useSelector(state => state.wishlist)
  const itemcount = item.data.length || 0;
  return (
    <>
      {selected == 0 ? <Home /> : null}
      {selected == 1 ? <Orders /> : null}
      {selected == 2 ? <Wishlist /> : null}
      {selected == 3 ? <Notification /> : null}
      {selected == 4 ? <Profile /> : null}
      <View style={styles.bottomcontainer}>
        <TouchableOpacity onPress={() => setselected(0)}>
          <Image style={styles.icons} source={selected != 0 ? require("../assets/home.png") : require("../assets/home_fill.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setselected(1)}>
          <Image style={styles.icons} source={selected != 1 ? require("../assets/orders.png") : require("../assets/orders_fill.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setselected(2)}>
          <Image style={styles.icons} source={selected != 2 ? require("../assets/heart.png") : require("../assets/heart_blackfill.png")} />
          {itemcount != 0 ? <View style={styles.itemcount}><Text style={styles.itemcountnumber}>{itemcount}</Text></View> : null}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setselected(3)}>
          <Image style={styles.icons} source={selected != 3 ? require("../assets/notification.png") : require("../assets/notification_fill.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setselected(4)}>
          <Image style={styles.icons} source={selected != 4 ? require("../assets/user.png") : require("../assets/user_fill.png")} />
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  bottomcontainer: {
    position: "absolute",
    bottom: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "orange",
    width: "94%",
    height: 50,
    flexDirection: 'row',
    borderRadius:20,
    marginHorizontal:"3%"
  },
  icons: {
    height: 30,
    width: 30,
    tintColor:'white'

  },
  itemcount: {
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: "black",
    position: "absolute",
    right:-5,
    top:-5,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  itemcountnumber: {
    color: "white",
    fontSize: 10,
    fontWeight: "700"
  }
})
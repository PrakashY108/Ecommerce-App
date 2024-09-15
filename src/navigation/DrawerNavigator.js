import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Main from '../screens/Main';
import Orders from '../screens/Orders';
import Wishlist from '../screens/Wishlist';

const Drawer =createDrawerNavigator();
export default function DrawerNavigator() {
  return (
     <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Main} options={{headerShown:false}} />

     </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})
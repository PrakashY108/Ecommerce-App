import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

export default function Orders() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header leftIcon={require("../assets/menu.png")} title="Orders" rightIcon={require("../assets/cart.png")} onpress={navigation.openDrawer}/>
      <View style={styles.content}>
        <Text style={styles.message}> No Orders</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});

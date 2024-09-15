import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import firestore from '@react-native-firebase/firestore';
export default function Login() {
    const [username, setUserName] = useState(null)
    const [userPassword, setUserPassword] = useState(null)
    const navigation = useNavigation();
    const handleLogin = () => {
        console.log("hii");
        firestore()
        .collection('Users')
        .doc(username)
        .get()
        .then(documentSnapshot => {
          console.log("hi");
      
          if (documentSnapshot.exists) {
            // Access the document data
            const userData = documentSnapshot
            console.log('User data:', userData);
          } else {
            console.log('No such user found!');
          }
        })
        .catch((err) => {
          console.log('Error fetching user data:', err);
        });}
    return (
        <View>
            <Header leftIcon={require("../assets/back.png")} onpress={navigation.goBack} title={"Login"} />

            <View style={styles.container}>
                <TextInput style={styles.input} value={username} onChangeText={(text) => setUserName(text)} placeholder='Enter Username' />
                <TextInput style={styles.input} value={userPassword} onChangeText={(text) => setUserPassword(text)} placeholder='Enter Password' />
                <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <View style={styles.options}>
                    <Text >Don't have account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}><Text style={{ color: "blue" }}>Sign Up</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "50%",
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "orange",
        alignContent: "center",
        alignSelf: "center",
        marginTop: "40%",
        marginHorizontal: "40%",
        borderRadius: 15,
        backgroundColor: "white",
    },
    input: {
        borderWidth: 1,
        borderColor: "orange",
        width: '90%',
        padding: 10,
        height: "18%",
        borderRadius: 10,
        marginVertical: 15

    },
    options: {
        flexDirection: 'row',
        gap: 5
    },
    btn: {
        height: 50,
        width: 170,
        color: "white",
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        marginHorizontal: 20,
        marginVertical: 10


    }
})
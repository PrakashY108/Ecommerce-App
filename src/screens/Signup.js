import { StyleSheet, Text, TouchableOpacity, View ,ActivityIndicator, Modal } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import  firestore from '@react-native-firebase/firestore'
import Loader from '../components/Loader'

export default function Signup() {
    const [userName, setUserName] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [isValid, setIsValid] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation();
    const isvalid = () => {
        if (userName.length <= 3) {
            setIsValid(false);
            return false;
        }
        if (userPassword.length < 5) {
            setIsValid(false);
            return false;
        }
        if (phonenumber.length < 10) {
            setIsValid(false);
            return false;
        }
        if (userPassword !== confirmPassword) {
            setIsValid(false);
            return false;
        }
        return true;
    }
    const handleSignUp = () => {
        setIsLoading(true);

        firestore()
          .collection('Users')
          .add({
            username: userName,
            password: userPassword,
            phonenumber: phonenumber
          })
          .then(() => {
            console.log('Account Created Successfully');
            setIsLoading(false); // Set loading to false after the operation completes
          })
          .catch((error) => {
            console.log('Error creating account:', error);
            setIsLoading(false); // Stop loading even if there's an error
          });}
        
   
    return (
        <View>
            <Header leftIcon={require("../assets/back.png")} onpress={navigation.goBack} title={"Sign Up"} />
            {isLoading && <Loader message={"Creating account"} />}
            <View style={styles.container}>
                <TextInput style={styles.input}
                    value={userName}
                    onChangeText={(text) => setUserName(text)}
                    placeholder='Enter name' />
                <TextInput
                    style={styles.input}
                    value={phonenumber}
                    onChangeText={(text) => setPhonenumber(text)}
                    placeholder='Enter phone number' 
                    keyboardType='number-pad'/>
                <TextInput
                    style={styles.input} value={userPassword}
                    onChangeText={(text) => setUserPassword(text)}
                    placeholder='Enter password'
                    secureTextEntry />
                    
                <TextInput
                    style={styles.input}
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                    placeholder='confirm password'
                    secureTextEntry />
                <TouchableOpacity style={styles.btn} value={userName} onChangeText={(text) => setUserName(text)} onPress={handleSignUp}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.options}>
                    <Text >Already User?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text style={{ color: "blue" }}>Login</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "80%",
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "orange",
        alignContent: "center",
        alignSelf: "center",
        marginTop: "20%",
        marginHorizontal: "40%",
        borderRadius: 15,
        backgroundColor: "white",
    },
    input: {
        MaxHeight: 20,
        borderWidth: 1,
        borderColor: "orange",
        width: '90%',
        padding: 10,
        height: "10%",
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
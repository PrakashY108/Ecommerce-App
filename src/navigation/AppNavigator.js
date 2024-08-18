import React from "react";
import { Text } from "react-native"
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import Carts from "../screens/Carts";
const Stack = createStackNavigator();
const AppNavigator = () => {
    return (<NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Carts" component={Carts}  />
        </Stack.Navigator>
       
    </NavigationContainer>)
}
export default AppNavigator;
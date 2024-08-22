import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import Carts from "../screens/Carts";
import ProductDetails from "../screens/ProductDetails";
const Stack = createStackNavigator();
const AppNavigator = () => {
    return (<NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Carts" component={Carts} options={{ headerShown: false }} />
            <Stack.Screen name="ProductDetails" component={ProductDetails}  options={{ headerShown: false }}/>
        </Stack.Navigator>
       
    </NavigationContainer>)
}
export default AppNavigator;
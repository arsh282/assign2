<<<<<<< HEAD
import { createStackNavigator } from "@react-navigation/stack";
=======
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
>>>>>>> 6b9917e (Initial commit)
import HomeScreen from "../views/HomeScreen";
import ProductDetailsScreen from "../views/ProductDetailsScreen";
import CheckoutScreen from "../views/CheckoutScreen";

const Stack = createStackNavigator();
<<<<<<< HEAD

export default function NavigationController() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shop" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: "Product Details" }} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
=======
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
  </Stack.Navigator>
);

export default function NavigationController() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Shop" component={HomeStack} />
      <Tab.Screen name="Checkout" component={CheckoutScreen} />
    </Tab.Navigator>
>>>>>>> 6b9917e (Initial commit)
  );
}

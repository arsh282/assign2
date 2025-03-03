import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../views/HomeScreen";
import ProductDetailsScreen from "../views/ProductDetailsScreen";
import CheckoutScreen from "../views/CheckoutScreen";

const Stack = createStackNavigator();

export default function NavigationController() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shop" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: "Product Details" }} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
}

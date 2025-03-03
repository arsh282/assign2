import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationController from "./src/controllers/NavigationController";
import { CartProvider } from "./src/context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <NavigationController />
      </NavigationContainer>
    </CartProvider>
  );
}

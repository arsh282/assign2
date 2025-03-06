import React from "react";
import { NavigationContainer } from "@react-navigation/native";
<<<<<<< HEAD
import NavigationController from "./src/controllers/NavigationController";
import { CartProvider } from "./src/context/CartContext";
=======
import { CartProvider } from "./src/context/CartContext";
import NavigationController from "./src/controllers/NavigationController";
>>>>>>> 6b9917e (Initial commit)

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <NavigationController />
      </NavigationContainer>
    </CartProvider>
  );
}

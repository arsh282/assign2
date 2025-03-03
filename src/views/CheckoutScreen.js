import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { CartContext } from "../context/CartContext"; 

const CheckoutScreen = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.cartId.toString()}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Text style={styles.itemText}>{item.name} - ${item.price}</Text>
                <TouchableOpacity onPress={() => removeFromCart(item.cartId)} style={styles.deleteButton}>
                  <Text style={{ color: "white" }}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  emptyText: { fontSize: 18, textAlign: "center", marginTop: 20 },
  cartItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 15, borderBottomWidth: 1, borderColor: "#ddd" },
  itemText: { fontSize: 18 },
  deleteButton: { backgroundColor: "red", padding: 10, borderRadius: 5 },
  totalText: { fontSize: 20, fontWeight: "bold", marginTop: 10, textAlign: "center" },
});

export default CheckoutScreen;

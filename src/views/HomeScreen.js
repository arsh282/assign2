import React, { useContext } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { CartContext } from "../context/CartContext";
import products from "../models/ProductModel"; 

const HomeScreen = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
            
            <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.button, styles.detailsButton]} 
              onPress={() => navigation.navigate("ProductDetails", { product: item })}
            >
              <Text style={styles.buttonText}>See Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#F5F5F5" },
  header: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  card: { flex: 1, backgroundColor: "#FFF", margin: 10, padding: 15, borderRadius: 10, alignItems: "center" },
  image: { width: 80, height: 80, marginBottom: 10 },
  name: { fontSize: 16, fontWeight: "bold" },
  price: { fontSize: 14, color: "green", marginBottom: 10 },
  button: { backgroundColor: "#007BFF", padding: 8, borderRadius: 5, marginTop: 5 },
  detailsButton: { backgroundColor: "orange" },
  buttonText: { color: "#FFF", fontWeight: "bold" },
});

export default HomeScreen;

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20, backgroundColor: "#FFF" },
  image: { width: 150, height: 150, marginBottom: 10 },
  name: { fontSize: 22, fontWeight: "bold" },
  price: { fontSize: 18, color: "green" },
  description: { fontSize: 16, textAlign: "center", marginTop: 10 },
});

export default ProductDetailsScreen;

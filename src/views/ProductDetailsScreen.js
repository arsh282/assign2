import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
<<<<<<< HEAD
      <Text style={styles.description}>{product.description}</Text>
=======
      <Text style={styles.description}>This is a high-quality {product.name}.</Text>
>>>>>>> 6b9917e (Initial commit)
    </View>
  );
};

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20, backgroundColor: "#FFF" },
  image: { width: 150, height: 150, marginBottom: 10 },
  name: { fontSize: 22, fontWeight: "bold" },
  price: { fontSize: 18, color: "green" },
  description: { fontSize: 16, textAlign: "center", marginTop: 10 },
});
=======
const styles = StyleSheet.create({ /* styles here */ });
>>>>>>> 6b9917e (Initial commit)

export default ProductDetailsScreen;

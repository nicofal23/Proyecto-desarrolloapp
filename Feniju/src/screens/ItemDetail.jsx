import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../data/products.json";

const ItemDetail = ({ navigation, route }) => {
  const [product, setProduct] = useState(null);
 
  const {id} = route.params;

  useEffect(() => {
    const productFinded = allProducts.find((product) => product.id === id);
    setProduct(productFinded);
  }, [id]);

  const renderImages = () => {
    if (product && product.images && product.images.length > 0) {
      return product.images.map((image, index) => (
        <Image key={index} source={{ uri: image }} style={styles.image} />
      ));
    }
    return null;
  };

  return product ? (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
      <View style={styles.imageContainer}>
        {renderImages()}
      </View>
      <Pressable style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Comprar</Text>
          </Pressable>
    </View> 
  ) : (
    <Text style={styles.loading}>Cargando...</Text>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#93a7de",
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  loading: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#888",
  },
  buyButton: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});

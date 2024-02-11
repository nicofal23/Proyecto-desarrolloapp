import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../data/products.json";

const ItemDetail = ({ productDetailId, setProductDetailId }) => {
  const [product, setProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const productFound = allProducts.find((product) => product.id === productDetailId);
    setProduct(productFound);
  }, [productDetailId]);

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
      <Pressable style={styles.backButton} onPress={()=> setProductDetailId ()} >
        <Text style={styles.backButtonText} >Volver</Text>
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
  backButton: {
    backgroundColor: '#007bff', 
    padding: 10, 
    borderRadius: 5,
  },
  backButtonText: {
    color: '#ffffff', 
    fontWeight: 'bold', 
    textAlign: 'center', 
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

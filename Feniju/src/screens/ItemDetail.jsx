//ItemDetail.jsx
import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../data/products.json";

const ItemDetail = ({ productDetailId, setProductDetailId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productFound = allProducts.find((product) => product.id === productDetailId);
    setProduct(productFound);
  }, [productDetailId]);

  return product ? (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
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
    backgroundColor: "#fff",
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
    backgroundColor: '#007bff', // Color de fondo del botón
    padding: 10, // Espaciado interno del botón
    borderRadius: 5, // Radio de borde para redondear el botón
  },
  backButtonText: {
    color: '#ffffff', // Color del texto del botón
    fontWeight: 'bold', // Estilo de fuente en negrita
    textAlign: 'center', // Alineación del texto en el centro del botón
  },
});



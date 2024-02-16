//ItemListCategories.jsx
import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList,StatusBar } from "react-native";
import ProductItem from "./ProductItem"; 
import allProducts from "../data/products.json";
import Search from "../components/Search";


const ItemListCategories = ({ navigation, route }) => {
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState("");

    const { category } = route.params;

    useEffect(() => {
        if (category) {
      const products = allProducts.filter((product) => product.category === category);
      const filteredProducts = products.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts);
    } else {
      const filteredProducts = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts);
    }
  }, [category, keyword]);

    return (
        <View style={styles.container}>
            <View>
                <Search onSearch={setKeyword}/>
            </View>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
                keyExtractor={(item) => item.id}
            />
              <StatusBar/>
        </View>
      
    );
};



export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
        fontSize:20,
        
    },
});



//ItemListCategories.jsx
import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList,StatusBar } from "react-native";
import ProductItem from "./ProductItem"; 
import allProducts from "../data/products.json";
import Search from "../components/Search";


const ItemListCategories = ({ category, setProductDetailId , setCategorySelected}) => {
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        if (category) {
            const filteredProducts = allProducts.filter(product => product.category === category);
            const productsFiltered = filteredProducts.filter(product => product.title.includes(keyword));
            setProducts(productsFiltered);
        } else {
            const productsFiltered = allProducts.filter(product => product.title.includes(keyword));
            setProducts(productsFiltered);
        }
    }, [category, keyword]);

    return (
        <View style={styles.container}>
            <View>
                <Search onSearch={setKeyword} setCategorySelected={setCategorySelected}/>
            </View>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem product={item} setProductDetailId={setProductDetailId} />}
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



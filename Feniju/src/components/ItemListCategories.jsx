import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ProductItem from "./ProductItem"; 
import Search from "../components/Search";
import { useSelector } from "react-redux";


const ItemListCategories = ({ navigation }) => {
    const productsFilteredByCategory = useSelector ((state)=> state.shopReducer.value.productsFilteredByCategory)
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState("");
    


    useEffect(() => {
        const productsFiltered = productsFilteredByCategory.filter((product) =>
          product.title.includes(keyword)
        );
        setProducts(productsFiltered);
      }, [productsFilteredByCategory, keyword]);
      

    return (
        <View style={styles.container}>
            <View>
                <Search onSearch={setKeyword}/>
            </View>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
};


export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatListContent: {
        paddingBottom: 20, 
    },
});



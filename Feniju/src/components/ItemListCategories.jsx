import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ProductItem from "./ProductItem"; 
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopService";


const ItemListCategories = ({ navigation }) => {
    // const productsFilteredByCategory = useSelector ((state)=> state.shopReducer.value.productsFilteredByCategory)
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState("");
    

    const category = useSelector((state) => state.shopReducer.categorySelected);
    const {data: productsFilteredByCategory , isLoading, error} = useGetProductsByCategoryQuery(category)

    useEffect(() => {
        console.log(productsFilteredByCategory);
        if (productsFilteredByCategory) {
            const productsRaw = Object.values(productsFilteredByCategory)
            const productsFiltered = productsRaw.filter((product) =>
                product.title.includes(keyword)
            );
            setProducts(productsFiltered);
        }
    }, [productsFilteredByCategory, keyword]);
    
    
      

    return (
        <View style={styles.container}>
          <Search onSearch={setKeyword} />
          <FlatList
            data={products}
            renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }

export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatListContent: {
        paddingBottom: 20, 
    },
});



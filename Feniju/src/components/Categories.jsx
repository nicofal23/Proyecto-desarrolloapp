//Categories.jsx
import { View, StyleSheet, ImageBackground, FlatList } from "react-native";
import getImageSource from './FuenteImage'
import CategoryItem from './CategoryItem';
// import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../services/shopService";


function Categories({ navigation }) {
    // const categories = useSelector((state) => state.shopReducer.value.categories);
    const { data, isLoading, error } = useGetCategoriesQuery();
    
    return (
        <View style={styles.contenedorcategories}>
            <FlatList
             data={data}
             renderItem={({item})=>( 
                <ImageBackground
                source={getImageSource(item)}
                style={styles.textBackground}
            >
                <CategoryItem navigation={navigation} category={item}/>
            </ImageBackground>
        )}
             keyExtractor={(category) => category}
            />
        </View>
    )}
    

export default Categories;

const styles = StyleSheet.create({
    contenedorcategories: {
        justifyContent: 'center',
        marginTop: 30,
        padding: 10,
        alignContent: 'center',
        marginRight: 10,
        width:400
        
    },
    textocategoria: {
        alignItems: 'center',
        borderRadius: 5,
        height:80,
        textAlign: 'center',
        fontSize:50,
        margin: 20,
        color: 'white'
    },
    textBackground: {
        margin:10,
        borderRadius: 5,
        overflow: 'hidden', // Asegura que la imagen no se salga del contenedor
    }
});

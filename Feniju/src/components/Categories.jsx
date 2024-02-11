//Categories.jsx
import { View, StyleSheet, ImageBackground, FlatList } from "react-native";
import categories from '../data/categories.json'
import getImageSource from './FuenteImage'
import CategoryItem from './CategoryItem';


function Categories ({setCategorySelected}){
    return (
        <View style={styles.contenedorcategories}>
            <FlatList
             data={categories}
             renderItem={({item})=>( 
                <ImageBackground
                source={getImageSource(item)}
                style={styles.textBackground}
            >
                <CategoryItem setCategorySelected={setCategorySelected} category={item} />
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

import { Text, View, StyleSheet, ImageBackground, FlatList } from "react-native";
import categories from '../data/categories.json'
import getImageSource from './FuenteImage'


function Categories (){
    return (
        <View style={styles.contenedorcategories}>
            <FlatList
             data={categories}
             renderItem={({item})=>( 
                <ImageBackground
                source={getImageSource(item)}
                style={styles.textBackground}
            >
                <Text style={styles.textocategoria}>{item}</Text>
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
        
    },
    textocategoria: {
        alignItems: 'center',
        borderRadius: 5,
        height:80,
        textAlign: 'center',
        fontSize:50,
        margin: 20,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)', 
        textShadowOffset: { width: 2, height: 2 }, 
        textShadowRadius: 10, 
    },
    textBackground: {
        margin:10,
        borderRadius: 5,
        overflow: 'hidden', // Asegura que la imagen no se salga del contenedor
    }
});

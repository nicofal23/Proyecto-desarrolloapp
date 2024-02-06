import { View, StyleSheet } from "react-native-web";
import Header from "./Header";

function ItemListCategories(){
    return (
        <View style={styles.header}>
            <Header titulo={'categorias'}/>
        </View>
    )
}


const styles =StyleSheet.create({
    header: {
        JustifyContent: 'center',
        FlexDirection: 'row',
        Width: '90%'
    }
})
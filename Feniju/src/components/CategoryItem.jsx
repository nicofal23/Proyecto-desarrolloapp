//CategoryItem.jsx
import { Pressable, StyleSheet, Text,View } from "react-native";



const CategoryItem = ({ category, navigation }) => {
  return (
    <View style={styles.card}>
      <Pressable onPress={() => navigation.navigate("ItemListCategories", {category})}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </View>
  );
};

export default CategoryItem;



const styles = StyleSheet.create({
    card: {
        marginVertical: 20 ,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
    },
  text: {
    fontSize: 45,
    fontFamily: 'FontWeb',
    color: 'white',
  },
 
});
import { Pressable, StyleSheet, Text,View } from "react-native";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";



const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch()

  return (
    <View style={styles.card}>
      <Pressable
      onPress={() => {
        dispatch(setCategorySelected(category))
        navigation.navigate("ItemListCategories", { category });
      }}
    >
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
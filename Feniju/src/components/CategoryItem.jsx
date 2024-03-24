import { Pressable, StyleSheet, Text,View } from "react-native";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";
import StyledText from "../styledComponents/StyledText";



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
        <StyledText textCategori white>{category}</StyledText>
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
});
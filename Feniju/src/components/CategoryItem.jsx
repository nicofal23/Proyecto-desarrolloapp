import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";

const CategoryItem = ({ category, setCategorySelected }) => {
  return (
    <Card style={{ marginVertical: 20 }}>
      <Pressable onPress={() => setCategorySelected(category)}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem;



const styles = StyleSheet.create({
    card: {
        width: 10
    },
  text: {
    fontSize: 25,
    fontFamily: 'FontWeb'
  },
 
});
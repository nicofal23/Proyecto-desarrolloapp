import { useEffect, useState } from "react";
import { View, Image, Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import Card from "./Card";

const ProductItem = ({ product, navigation }) => {
  const [isPortrait, setIsPortrait] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);

  const { width, height } = useWindowDimensions();

  console.log(width, height);

  useEffect(() => {
    if (height > width) {
      setIsPortrait(true);
      setIsLandscape(false);
    } else {
      setIsPortrait(false);
      setIsLandscape(true);
    }
  }, [width, height]);

  return (
    <View style={styles.contenedor}>
      <Pressable onPress={() => navigation.navigate("ItemDetail", {id: product.id})}>
        <Card style={styles.card}>
          <View>
            <Text style={width < 400 ? styles.textMin : styles.text}>{product.title}</Text>
            <Text style={styles.precio}>${product.price}</Text>
          </View>
          <Image style={styles.image} source={{ uri: product.images[0] }} />
        </Card>
      </Pressable>
    </View> 
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  precio: {
    fontSize:20,
    fontWeight: 'bold',
  },
  contenedor:{
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
   
  },
  card: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:'#93a7de',
    width: '90%',
    padding:10,
  },
  text: {
    fontSize: 20,
    width: "70%",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "black",
    fontFamily: 'FontWeb',
  },
  textMin: {
    fontSize: 14,
    width: "70%",
  },
  image: {
    width: 70,
    height: 70,
  },
}); 
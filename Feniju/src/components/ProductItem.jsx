import { useEffect, useState } from "react";
import { View, Image, Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import Card from "./Card";
import StyledText from "../styledComponents/StyledText";

const ProductItem = ({ product, navigation }) => {
  const [isPortrait, setIsPortrait] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);

  const { width, height } = useWindowDimensions();


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
            <StyledText>{product.title}</StyledText>
            <StyledText font text>${product.price}</StyledText>
          </View>
          <Image style={styles.image} source={{ uri: product.images[0] }} />
        </Card>
      </Pressable>
    </View> 
  );
};

export default ProductItem;

const styles = StyleSheet.create({
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
  image: {
    width: 70,
    height: 70,
  },
}); 
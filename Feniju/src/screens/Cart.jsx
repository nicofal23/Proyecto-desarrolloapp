import { StyleSheet, View, FlatList, Text} from 'react-native';
import CartItem from '../components/CartItem';
import { colors } from '../global/Colors';
import { useSelector } from "react-redux";

const Cart = () => {

  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);

  return (
    <View>
      {cartItems.length > 0 ? (
        <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={(cartItem) => cartItem.id}
      />
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Total: ${total}</Text>
        </View>
      </View>
      </>) : (
        <Text>No hay productos agregados</Text>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
    card:{
        backgroundColor: colors.header,
        padding: 10,
        borderWidth:2,
        borderRadius:10,
        width:'40%',
        marginLeft:10,
    },
    textContainer:{
      justifyContent:'center',
      alignItems:'center'
    },
    text: {
      color:'black',
      fontSize:17
    }
})

export default Cart;
import { StyleSheet, View, FlatList, Text} from 'react-native';
import CartItem from '../components/CartItem';
import { colors } from '../global/Colors';
import { useSelector } from "react-redux";

const Cart = () => {

  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);

  return (
    <View style={styles.container}>
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
        </>
      ) : (
        <View style={styles.noProductsContainer}>
          <Text style={styles.noProductsText}>No hay productos agregados</Text>
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card:{
        backgroundColor: colors.header,
        padding: 10,
        borderWidth:2,
        borderRadius:10,
        width:'40%',
        margin:10,
    },
    textContainer:{
      justifyContent:'center',
      alignItems:'center'
    },
    text: {
      color:'black',
      fontSize:17
    },
    noProductsContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    noProductsText: {
      fontSize: 20,
      fontStyle: 'italic',
      color: '#888',
    },
})

export default Cart;
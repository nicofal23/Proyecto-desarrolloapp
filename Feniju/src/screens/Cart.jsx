import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';
import allCartItems from '../data/cart.json';
import CartItem from '../components/CartItem';
import { colors } from '../global/Colors'

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = allCartItems.reduce((acc, currentItem)=> acc += (currentItem.quantity * currentItem.price),0)
    setCartItems(allCartItems);
    setTotal(total)
  }, []);

  return (
    <View>
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
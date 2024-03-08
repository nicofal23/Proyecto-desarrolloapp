import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, Pressable } from 'react-native';
import CartItem from '../components/CartItem';
import { colors } from '../global/Colors';
import { useSelector, useDispatch } from "react-redux";
import { usePostOrderMutation } from '../services/shopService';
import Toast from 'react-native-toast-message';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const [triggerPost, result] = usePostOrderMutation();
  const [isOrdering, setIsOrdering] = useState(false);

  const confirmCart = async () => {
    try {
      setIsOrdering(true);
      const response = await triggerPost({ total, cartItems, user: "loggedUser" });
      setIsOrdering(false);
      if (response && response.data) {
        showToast('success', 'Orden enviada correctamente');
        dispatch({ type: 'CLEAR_CART' });
      } else {
        showToast('error', 'Error al enviar la orden');
      }
    } catch (error) {
      setIsOrdering(false);
      showToast('error', 'Error al enviar la orden');
    }
  }

  const showToast = (type, message) => {
    Toast.show({
      type: type,
      text1: message,
      visibilityTime: 3000,
      autoHide: true,
      bottomOffset: 40
    });
  }

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
            <View>
              <Pressable onPress={confirmCart} disabled={isOrdering}>
                <Text>Enviar Orden</Text>
              </Pressable>
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
    padding: 20,
    backgroundColor: 'white'
  },
  card: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textContainer: {
    flex: 1
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  noProductsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noProductsText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default Cart;

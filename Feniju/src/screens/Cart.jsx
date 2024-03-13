import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, Pressable, Alert } from 'react-native';
import CartItem from '../components/CartItem';
import { colors } from '../global/Colors';
import { useSelector, useDispatch } from "react-redux";
import { usePostOrderMutation } from '../services/shopService';
import Toast from 'react-native-toast-message';
import { clearCart as clearCartAction } from '../features/shop/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const userEmail = useSelector((state) => state.authReducer.value.user); 
  const dispatch = useDispatch();
  const [triggerPost, result] = usePostOrderMutation();
  const [isOrdering, setIsOrdering] = useState(false);

  const confirmCart = async () => {
    try {
      setIsOrdering(true);
      const currentDate = new Date().toISOString();
      const order = { total, cartItems, user: userEmail, createdAt: currentDate };
      const response = await triggerPost(order);
      setIsOrdering(false);
      if (response && response.data) {
        showToast('success', 'Orden enviada correctamente');
        Alert.alert(
          'Orden enviada',
          '¿Desea vaciar el carrito?',
          [
            { text: 'Sí', onPress: clearCart },
            { text: 'No', style: 'cancel' }
          ]
        );
      } else {
        showToast('error', 'Error al enviar la orden');
      }
    } catch (error) {
      setIsOrdering(false);
      showToast('error', 'Error al enviar la orden');
    }
  }

  const clearCart = () => {
    dispatch(clearCartAction());
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
            clearCart={clearCart}
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
          <Text style={styles.noProductsText}>No hay productos agregados al carrito</Text>
        </View>
      )}
    </View>
  );
};

export default Cart;



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


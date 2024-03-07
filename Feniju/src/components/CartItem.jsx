import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { colors } from '../global/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux'; 
import { removeItem } from '../features/shop/cartSlice'; 
import Toast from 'react-native-toast-message';

const CartItem = ({ item }) => {
  const dispatch = useDispatch(); // Obtén la función dispatch para despachar acciones

  const handleRemoveItem = () => { 
    dispatch(removeItem({ productId: item.id }));

    Toast.show({
      type: 'info', 
      text1: '¡Producto eliminado!',
      visibilityTime: 1000,
  });
  };

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Nombre: {item.title}</Text>
        <Text style={styles.text2}>Precio: ${item.price}</Text>
        <Text style={styles.text2}>Cantidad: {item.quantity}</Text>
      </View>
      <Pressable onPress={handleRemoveItem}>
        <Ionicons name="trash-bin-outline" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
    card:{
        margin:10,
        flex:1,
        height:100,
        backgroundColor: colors.header,
        padding: 10,
        borderWidth:2,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    textContainer: {
        width:'70%',
        flexDirection:'column',
        justifyContent:'flex-start',
    },
    text: {
        fontSize: 17,
        color: 'black'
    },
    text2 : {
        fontSize:14,
        color:'black'
    }
})
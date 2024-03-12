import React from 'react';
import { StyleSheet, View } from 'react-native';
import OrderItem from '../components/OrderItem'; 

const Orders = () => {
  return (
    <View style={styles.container}>
      <OrderItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Orders;

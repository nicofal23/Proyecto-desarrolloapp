import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../features/counter/counterSlice';
import StyledText from '../styledComponents/StyledText';

const Counter = ({ stock, onChangeQuantity }) => {
  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();

  const decrementCount = () => {
    if (count > 1) {
      dispatch(decrement());
      onChangeQuantity(count - 1);
    }
  };

  const incrementCount = () => {
    if (count < stock) {
      dispatch(increment());
      onChangeQuantity(count + 1);
    }
  };

  const resetCount = () => {
    dispatch(reset());
    onChangeQuantity(1); 
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={decrementCount} style={styles.button}>
        <StyledText font text>-</StyledText>
      </Pressable>
      <StyledText font>{count}</StyledText>
      <Pressable onPress={incrementCount} style={styles.button}>
        <StyledText font text>+</StyledText>
      </Pressable>
      <Pressable onPress={resetCount} style={styles.button}>
        <StyledText font text >x</StyledText>
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  },
});

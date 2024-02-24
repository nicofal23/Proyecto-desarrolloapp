import { Pressable, StyleSheet, Text, View } from 'react-native'
import {increment, decrement, incrementByAmount, reset} from '../features/counter/counterSlice'
import {useDispatch, useSelector } from 'react-redux'

const Counter = ({stock}) => {
    const count = useSelector((state)=> state.counterReducer.value);
    const dispatch = useDispatch()


    const decrementCount = () => {
        if (count > 0) {
          dispatch(decrement());
        }
      };
    
      const incrementCount = () => {
        if (count < stock) {
          dispatch(increment());
        }
      };
    
      const resetCount = () => {
        dispatch(reset());
      };
      const incrementByAmountCount = (amount) => {
        if (count + amount <= stock) {
          dispatch(incrementByAmount(amount));
        }
      };
      return (
        <View style={styles.container}>
            <Pressable onPress={() => incrementByAmountCount(5)} style={styles.button}>
        <Text style={styles.buttonText}>+5</Text>
      </Pressable>
          <Pressable onPress={decrementCount} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.counterText}>{count}</Text>
          <Pressable onPress={incrementCount} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
          <Pressable onPress={resetCount} style={styles.button}>
            <Text style={styles.buttonText}>x</Text>
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
        marginLeft:10,
        marginRight:10,
      },
      buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
      counterText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    });
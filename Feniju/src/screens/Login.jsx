import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import InputForm from '../components/InputForm';

const Login = () => {
  const onchange = () => {
    // Función de cambio de entrada, por ejemplo para manejar la entrada del usuario
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <InputForm label="Email" error="" onchange={onchange} style={styles.input} />
      <InputForm label="Contraseña" error="" onchange={onchange} style={styles.input}  />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    input:{
        width:'900'
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    alignItems:'center',
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
   
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Login;

// TareaInput.js
import React from 'react';
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const TareaInput = ({ nuevaTarea, setNuevaTarea, agregarTarea }) => {
  return (
    <View style={styles.contenedorInput}>
      <TextInput
        style={styles.input}
        placeholder="Nuevo Producto..."
        value={nuevaTarea}
        onChangeText={(texto) => setNuevaTarea(texto)}
      />
      <TouchableOpacity onPress={agregarTarea}>
        <Text style={styles.botonAgregar}>Agregar</Text>
      </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  botonAgregar: {
    padding: 10,
    backgroundColor: 'blue',
    color: '#fff',
    borderRadius: 5,
  },
});

export default TareaInput;

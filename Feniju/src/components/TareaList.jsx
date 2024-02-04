// TareaList.js
import React from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const TareaList = ({ tareas, eliminarTarea, alternarCompletado }) => {
  return (
    <FlatList
      data={tareas}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.contenedorTarea}>
          <Text style={styles.textoTarea}>{item.texto}</Text>
          <TouchableOpacity onPress={() => alternarCompletado(item.id)}>
            <Text style={[styles.accionTarea, { color: item.completada ? 'blue' : 'red' }]}>
              {item.completada ? 'Hecho' : 'Marcar'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => eliminarTarea(item.id)}>
            <Text style={styles.accionTarea}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  contenedorTarea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '80%',
  },
  textoTarea: {
    flex: 1,
  },
  accionTarea: {
    marginLeft: 10,
    color: 'blue',
  },
});

export default TareaList;

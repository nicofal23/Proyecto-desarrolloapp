import React, { useState } from 'react';
import { StatusBar, TextInput, TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, { id: Date.now().toString(), texto: nuevaTarea, completada: false }]);
      setNuevaTarea('');
    }
  };

  const eliminarTarea = (tareaId) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== tareaId);
    setTareas(tareasActualizadas);
  };

  const alternarCompletado = (tareaId) => {
    const tareasActualizadas = tareas.map(tarea =>
      tarea.id === tareaId ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(tareasActualizadas);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Lista de Tareas</Text>
      
      <FlatList
        data={tareas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.contenedorTarea}>
            <Text style={styles.textoTarea}>{item.texto}</Text>
            <TouchableOpacity onPress={() => alternarCompletado(item.id)}>
              <Text style={[styles.accionTarea, { color: item.completada ? 'green' : 'blue' }]}>
                {item.completada ? 'Desmarcar' : 'Marcar'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => eliminarTarea(item.id)}>
              <Text style={styles.accionTarea}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.contenedorInput}>
        <TextInput
          style={styles.input}
          placeholder="Nueva tarea..."
          value={nuevaTarea}
          onChangeText={(texto) => setNuevaTarea(texto)}
        />
        <TouchableOpacity onPress={agregarTarea}>
          <Text style={styles.botonAgregar}>Agregar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    paddingTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
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

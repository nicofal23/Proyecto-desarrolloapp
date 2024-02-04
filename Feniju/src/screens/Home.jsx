import React, { useState } from 'react';
import { StatusBar, View, Text } from 'react-native';
import TareaList from '../components/TareaList';
import TareaInput from '../components/TareaInput';
import { StyleSheet } from 'react-native';

export default function Home() {
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
      <Text style={styles.titulo}>Lista de Productos</Text>

      <TareaList
        tareas={tareas}
        eliminarTarea={eliminarTarea}
        alternarCompletado={alternarCompletado}
      />

      <TareaInput
        nuevaTarea={nuevaTarea}
        setNuevaTarea={setNuevaTarea}
        agregarTarea={agregarTarea}
      />

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
});

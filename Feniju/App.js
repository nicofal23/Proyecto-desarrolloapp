
import React, { useState } from 'react';  // Agrega esta línea para importar useState
import { StatusBar, TextInput, TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now().toString(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tareas</Text>
      
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.text}</Text>
            <TouchableOpacity onPress={() => toggleComplete(item.id)}>
              <Text style={[styles.taskAction, { color: item.completed ? 'green' : 'blue' }]}>
                {item.completed ? 'Desmarcar' : 'Marcar'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.taskAction}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nueva tarea..."
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <TouchableOpacity onPress={addTask}>
          <Text style={styles.addButton}>Agregar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '80%',
  },
  taskText: {
    flex: 1,
  },
  taskAction: {
    marginLeft: 10,
    color: 'blue',
  },
  inputContainer: {
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
  addButton: {
    padding: 10,
    backgroundColor: 'blue',
    color: '#fff',
    borderRadius: 5,
  },
});


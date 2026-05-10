
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from '../redux/tasksSlice';

export default function TasksScreen() {
  const [task, setTask] = useState('');

  const tasks = useSelector(state => state.tasks.list);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestion des tâches</Text>

      <TextInput
        style={styles.input}
        placeholder="Ajouter une tâche"
        value={task}
        onChangeText={setTask}
      />

      <Button title="Ajouter" onPress={handleAdd} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.title}</Text>

            <Button
              title="Supprimer"
              onPress={() => dispatch(removeTask(item.id))}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold'
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },

  taskItem: {
    marginTop: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  }
});

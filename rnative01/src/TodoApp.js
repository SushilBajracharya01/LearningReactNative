import React, { useState } from 'react';
import ListItem from './ListItem';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  function addTodo() {
    if (todo !== '') {
      let newTodoList = [...todoList, todo];
      setTodoList(newTodoList);
      setTodo('');
    }
  }
  function removeTodo(position) {
    let newTodoList = todoList.filter((item, id) => {
      return position !== id;
    });
    setTodoList(newTodoList);
  }
  return (
    <View style={styles.todoapp}>
      <Text style={styles.heading}>Todo App</Text>
      <TextInput
        style={styles.inputbox}
        value={todo}
        onChangeText={text => setTodo(text)}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addTodo()}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
      <ScrollView style={{ width: '100%' }}>
        <ListItem items={todoList} remove={removeTodo} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  todoapp: {
    backgroundColor: '#fda123',
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 10,
  },
  inputbox: {
    backgroundColor: 'white',
    width: '80%',
  },
  btn: {
    width: '20%',
    padding: 10,
    marginTop: 5,
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});

export default TodoApp;

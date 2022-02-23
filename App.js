import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View>
      <Navbar headerTitle={"Мои Дела:"} />
      <View style={styles.container}>
        <AddTodo addTodo={addTodo} />

        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({ item }) => (
            <Todo todo={item} removeTodo={removeTodo} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export const Todo = ({ todo, removeTodo }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onLongPress={() => removeTodo(todo.id)}
    >
      <View style={styles.todoWrapper}>
        <Text style={styles.text}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    marginBottom: 4,
  },
  text: {
    color: "#000",
  },
});

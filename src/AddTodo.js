import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleAddTodo = () => {
    if (title === "") {
      return Alert.alert("Введите название задания");
    }
    addTodo(title);
    setTitle("");
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder={"Введите название задания..."}
        onChangeText={(value) => setTitle(value)}
        value={title}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="Добавить" style={styles.button} onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "70%",
    padding: 5,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderColor: "#3949ab",
  },
  button: {
    color: "#000",
    fontSize: 15,
  },
});

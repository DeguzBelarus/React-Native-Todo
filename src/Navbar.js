import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Navbar = ({ headerTitle }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{headerTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#3949ab",
    paddingBottom: 10,
  },
  text: {
    color: "#fff",
    fontSize: 22,
  },
});

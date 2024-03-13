import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const SubmitButton = ({ onPress, title }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    width: "50%",
  },
  text: {
    color: "white",
    fontSize: 22,
  },
});
 
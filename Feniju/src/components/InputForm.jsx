import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const InputForm = ({ label, error, onChange, isSecure }) => {
  const [input, setInput] = useState("");

  const onChangeText = (text) => {
    setInput(text);
    onChange(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.inputError]} 
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null} 
    </View>
  );
};

export default InputForm;


const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red', 
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});

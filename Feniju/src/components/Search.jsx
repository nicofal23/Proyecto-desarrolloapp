import { useState } from "react";
import { Pressable, TextInput, View, StyleSheet  } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from '@expo/vector-icons';

const Search = ({ onSearch, setCategorySelected }) => {
    const [input, setInput] = useState("");

    const formatInput = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    };

    const search = () => {
        if (input.trim()) {
            onSearch(formatInput(input));
        }
    };

    const removeInput = () => {
        setInput("");
        onSearch("");
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={input}
                    onChangeText={(text) => setInput(text)}
                    placeholder="Busca..."
                />
                <Pressable onPress={search}>
                    <Octicons name="search" size={24} color="black" />
                </Pressable>
                <Pressable onPress={removeInput}>
                    <Entypo name="cross" size={25} color="black" />
                </Pressable>
            </View>
        </View>
    );
}


export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column", 
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    marginLeft: 10
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingTop: 10,
    height: 80,
  },
  input: {
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    width: "80%",
    margin: 10
  },
  buttoncontainer: {
    margin:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    justifyContent: "center",
    backgroundColor: '#007bff', 
    padding: 10, 
    borderRadius: 5,
  },
  backButtonText: {
    color: '#ffffff', 
    fontWeight: 'bold', 
    textAlign: 'center', 
  },
});
import React, { useState } from "react";
import { Button, TextInput, StyleSheet, View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../features/auth/authSlice";

const UserProfileForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSaveProfile = () => {
    const userData = {
      name: name,
      phoneNumber: phoneNumber,
      address: address,
    };

    // Dispatch de la acción para actualizar el perfil de usuario
    dispatch(updateUserProfile(userData));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.label}>Teléfono:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <Text style={styles.label}>Dirección:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <Button title="Guardar" onPress={handleSaveProfile} />
    </View>
  );
};

export default UserProfileForm;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

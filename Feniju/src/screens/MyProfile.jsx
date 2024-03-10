import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const MyProfile = ({ navigation }) => {
  const { profileImage, imageCamera, userData } = useSelector((state) => state.authReducer.value);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={profileImage ? { uri: profileImage } : require("../../assets/defaultprofile.png")}
          resizeMode="cover"
          style={styles.image}
        />
        <Pressable
          style={styles.editButton}
          onPress={() => navigation.navigate("Image Selector")}
        >
          <Text style={styles.text}>Editar</Text>
        </Pressable>
      </View>
      <Text style={styles.userData}>{userData ? `Nombre: ${userData.name}, Email: ${userData.email}` : 'Datos de usuario no disponibles'}</Text>
      <Pressable
        style={[styles.button, { backgroundColor: 'green' }]}
        onPress={() => navigation.navigate("Location Selector")}
      >
        <Text style={styles.text}>Mi Dirección</Text>
      </Pressable>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 5,
  },
  editButton: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  button: {
    width: "80%",
    elevation: 8,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    margin: 5,
  },
  userData: {
    fontSize: 16,
    marginBottom: 20,
  },
});

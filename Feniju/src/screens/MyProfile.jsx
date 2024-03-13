import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const MyProfile = ({ navigation }) => {
  const { profileImage, imageCamera } = useSelector((state) => state.authReducer.value);

  return (
    <View style={styles.container}>
      {profileImage || imageCamera ? (
        <Image
          source={{ uri: profileImage || imageCamera }}
          resizeMode="cover"
          style={styles.image}
        />
      ) : (
        <>
          <Image
            source={require("../../assets/defaultprofile.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </>
      )}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Image Selector")}
      >
        <Text style={styles.text}>Agregar imagen</Text>
      </Pressable>
      <Pressable
        style={styles.button}
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
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
  },
});
 
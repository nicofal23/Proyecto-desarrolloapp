import React from "react";
import { View, Image } from "react-native";
import { useSelector } from "react-redux";
import { EvilIcons } from "@expo/vector-icons";

const MyProfileTabIcon = ({ focused }) => {
  const { user, profileImage } = useSelector((state) => state.authReducer.value);

  return (
    <View style={styles.tabContainer}>
      {profileImage ? (
        <Image
          source={{ uri: profileImage }} 
          style={styles.profileImage}
        />
      ) : (
        <EvilIcons 
          name="user"
          size={30}
          color={focused ? "black" : "white"}
        />
      )}
    </View>
  );
};

export default MyProfileTabIcon;

const styles = {
  tabContainer: {
    alignItems: "center",
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
};

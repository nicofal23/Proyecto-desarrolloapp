import React from "react";
import { View, Image } from "react-native";
import { useSelector } from "react-redux";

const MyProfileTabIcon = ({ focused }) => {
  const { user, profileImage } = useSelector((state) => state.authReducer.value);

  return (
    <View style={styles.tabContainer}>
      {user && profileImage ? (
        <Image
          source={{ uri: profileImage }} 
          style={styles.profileImage}
        />
      ) : null}
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

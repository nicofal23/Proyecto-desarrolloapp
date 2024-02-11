import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  thumbnail: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    marginBottom: 5,
  },
  price: {
    fontWeight: "bold",
  },
});



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
    fontFamily: 'FontWeb',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white"
  },
  description: {
    marginBottom: 5,
  },
  price: {
    fontWeight: "bold",
  },
});



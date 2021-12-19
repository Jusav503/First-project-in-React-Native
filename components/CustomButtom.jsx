import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const CustomButtom = (props) => {
  return (
    <View style={[styles.buttonContainer, {backgroundColor: props.backgroundColor}]}>
      <FontAwesome name={props.FontAwesomeIcon} size={24} color={props.colorIcon} />
      <Text style={[styles.buttonText, {color: props.colorTitle}]}>{props.title}</Text>
    </View>
  );
};

export default CustomButtom;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});

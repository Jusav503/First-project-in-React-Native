import React from "react";
import { View, Text, StyleSheet } from "react-native";

const atoms = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  rowNbtw: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tcm: { color: "white" },
  tcs: { color: "grey" },
  smallImage: { width: 30, height: 30, marginRight: 10 },

  mediumText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "white",
  },
  largeText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    marginVertical: 10,
  },

  bigNumber: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
  },

  coinPercentageContainer: {
    flexDirection: "row",
    padding: 7,
    color: "white",
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  coinPercentage: {
    color: "white",
    marginHorizontal: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default atoms;

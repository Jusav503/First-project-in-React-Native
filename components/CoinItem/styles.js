import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center"
  },
  coinName: { flexDirection: "row" },
  rank: {                                                         
    backgroundColor: "#808080",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    width: 15,
    height: 13,
    fontSize: 10,
    borderRadius: 5,
    marginRight:5
  },
  textPrice: { color: "#fff", fontSize: 15 },
  textSymbol: { color: "#434343", textTransform: "uppercase" },
  prices: { alignItems: "flex-end" },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  coinName: { flexDirection: "row" },
  image: { width: 30, height: 30 },

  contentNames: { marginLeft: 10 },
  text: { color: "#fff" },
  textPrice: { color: "#fff", fontSize:15, },
  textSymbol: { color: "#434343", textTransform: "uppercase" },

  prices: { alignItems: "flex-end" },
});

export default styles;

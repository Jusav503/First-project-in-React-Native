import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loading:{
    flex:1,
    justifyContent:"center",
    alignItems: "center",
   },
  currentPriceContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  coinImage: {
    width: 30,
    height: 30,
    margin: 5,
  },
  coinName: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },
  coinPrice: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
  },
  coinPercentage: {
    flexDirection: "row",
    padding: 7,
    color: "white",
    borderRadius: 5,
    alignItems: "center",
    width:85
  },
});

export default styles;

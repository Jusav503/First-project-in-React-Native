import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
    fontSize: 50,
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
  input:{
    borderWidth:1,
    borderBottomColor:"white",
    color: "white",
    width: 100,
    paddingLeft:10,
    marginLeft:10
  }
});

export default styles;

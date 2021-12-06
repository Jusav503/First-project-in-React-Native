import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  coinInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinImage: {
    width: 30,
    height: 30,
    margin:5
  },
  coinSymbol:{
    color:"gray",
  },
  coinRank:{
    backgroundColor:"gray", 
    color:"white",
    textAlignVertical:"center",
    textAlign:"center",
    padding: 4,
    borderRadius:5,
    marginHorizontal:5,
  },
  text: {
    color: "white",
  },
});

export default styles;

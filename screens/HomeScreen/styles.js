import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  list: { paddingHorizontal:10 },
  title: { color: "#fff", fontSize: 20, padding:10, fontWeight:"bold" },
  header: {
    paddingHorizontal:10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchInput: {
    color: "#fff",
    borderBottomColor: "#696969",
    borderBottomWidth: 1,
    width: "35%",
  },
});

export default styles;

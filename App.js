import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  StatusBar,
} from "react-native";
import CoinItem from "./components/CoinItem";

export default function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    setCoins(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" />

      <View style={styles.header}>
        <Text style={styles.title}>JusavMarket</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#858585"
          onChangeText={(text) => setSearch(text)}
          autoCapitalize="none"
          autoCompleteType="off"
        />
      </View>

      <FlatList
        style={styles.list}
        data={coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search) ||
            coin.symbol.toLowerCase().includes(search)
        )}
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await loadData();
          setRefreshing(false);
        }}
        renderItem={({ item }) => {
          return <CoinItem coin={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#000", alignItems: "center", flex: 1 },
  list: { width: "90%" },
  title: { color: "#fff", fontSize: 20 },
  header: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  searchInput: {
    color: "#fff",
    borderBottomColor: "#696969",
    borderBottomWidth: 1,
    width: "40%",
    textAlign: "center",
  },
});

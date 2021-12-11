import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import { SearchBar } from "react-native-elements";

import CoinItem from "../../components/CoinItem/CoinItem";
import styles from "./styles";

const HomeScreen = () => {
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
    <View>
      {/* Search bar */}
      <View style={styles.header}>
        <Text style={styles.title}>JusavMarket</Text>
        <SearchBar
          value={search}
          placeholder="Search"
          autoCapitalize="none"
          autoCompleteType="off"
          onChangeText={(text) => setSearch(text)}
          containerStyle={styles.searchInput}
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
};

export default HomeScreen;

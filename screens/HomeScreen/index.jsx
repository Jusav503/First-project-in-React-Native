import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, RefreshControl } from "react-native";
import { SearchBar } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

import CoinItem from "../../components/CoinItem/CoinItem";
import { getCoins } from "../../services/requests";
import styles from "./styles";

const HomeScreen = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const loadData = async (pageNumber) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const fetchedCoins = await getCoins(pageNumber);
    setCoins((existingCoins) => [...existingCoins, ...fetchedCoins]);
    setLoading(false);
  };
  const refetchCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const fetchedCoins = await getCoins();
    setCoins(fetchedCoins);
    setLoading(false);
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
        renderItem={({ item }) => {
          return <CoinItem coin={item} />;
        }}
        onEndReached={() => loadData(coins.length / 50 + 1)}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor="white"
            onRefresh={refetchCoins}
          />
        }
      />
    </View>
  );
};

export default HomeScreen;

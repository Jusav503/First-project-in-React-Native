import React, { useState, useEffect } from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";
import CoinItem from "../../components/CoinItem/CoinItem";

import { useWatchlist } from "../../contexts/WatchlistContext";
import { getWatchlistedCoins } from "../../services/requests";

const WatchlistScreen = () => {
  const { watchlistCoinIds } = useWatchlist();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const transformCoinIds = () => watchlistCoinIds.join("%2C");

  const fetchWatchlistedCoins = async () => {
    if (loading) { return; }
    setLoading(true);
    const watchlistedCoinsData = await getWatchlistedCoins( 1, transformCoinIds());
    setCoins(watchlistedCoinsData);
    setLoading(false);
  };
  useEffect(() => {
    fetchWatchlistedCoins();
  }, []);

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={coins}
        renderItem={({ item }) => <CoinItem coin={item} />}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor={"white"}
            onRefresh={fetchWatchlistedCoins}
          />
        }
      />
    </View>
  );
};

export default WatchlistScreen;

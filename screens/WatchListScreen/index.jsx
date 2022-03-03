import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { FlatList, RefreshControl, View, } from "react-native";
import atoms from "../../components/atoms";

import CoinItem from "../../components/CoinItem/CoinItem";
import { useWatchlist } from "../../contexts/WatchListContext";
import { getWatchlistedCoins } from "../../services/requests";

const WatchlistScreen = () => {
  const { watchlistCoinIds } = useWatchlist();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const transformCoinIds = () => watchlistCoinIds.join("%2C");

  const fetchWatchlistedCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const watchlistedCoinsData = await getWatchlistedCoins(1,transformCoinIds());
    setCoins(watchlistedCoinsData);
    setLoading(false);
  };
  useEffect(() => {
    if(watchlistCoinIds.length > 0) {
      fetchWatchlistedCoins()
    }
  }, [watchlistCoinIds]);

  const renderItem = ({ item }) => <CoinItem coin={item} />;

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={coins}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor={"white"}
            onRefresh={watchlistCoinIds.length > 0 ? fetchWatchlistedCoins : null}
          />
        }
      />
    </View>
  );
};

export default WatchlistScreen;

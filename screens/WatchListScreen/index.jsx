import React from "react";
import { FlatList, View, Text } from "react-native";

import { useWatchlist } from "../../contexts/WatchlistContext";

const WatchlistScreen = () => {
  const { watchlistCoinIds } = useWatchlist();
  console.log(watchlistCoinIds);
  return (
      <View>
          <Text>Hola</Text>
      </View>
  );
};

export default WatchlistScreen;

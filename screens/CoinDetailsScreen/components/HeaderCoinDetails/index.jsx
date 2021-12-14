import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { useWatchlist } from "../../../../contexts/WatchlistContext";

const HeaderCoinDetails = (props) => {
  const { coinId, image, symbol, market_data } = props;
  const navigation = useNavigation();
  const { watchlistCoinIds, storeWatchlistCoinId, deleteWatchlistCoinId } = useWatchlist();

  const checkIfCoinsWatchlisted = () => watchlistCoinIds.some((coinValueId) => coinValueId === coinId);

  const handleWatchlistCoin = () => {
    if (checkIfCoinsWatchlisted()) {
      return deleteWatchlistCoinId(coinId);
    }
    return storeWatchlistCoinId(coinId);
  };
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={25} color="white" />
        </TouchableOpacity>
        <View style={styles.coinInfo}>
          <Image source={{ uri: image }} style={styles.coinImage} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.coinRank}># {market_data}</Text>
            <Text style={styles.coinSymbol}>{symbol.toUpperCase()}</Text>
          </View>
        </View>
        <FontAwesome
          name={checkIfCoinsWatchlisted() ? "star" : "star-o"}
          size={25}
          color={checkIfCoinsWatchlisted() ? "yellow" : "white"}
          onPress={handleWatchlistCoin}
        />
      </View>
    </SafeAreaView>
  );
};

export default HeaderCoinDetails;

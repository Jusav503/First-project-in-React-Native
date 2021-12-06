import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Coin from "../../assets/data/crypto.json";
import HeaderCoinDetails from "./components/HeaderCoinDetails";
import styles from "./styles";

const CoinDetailsScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin;
  const percentageColor =
    price_change_percentage_24h < 0 ? "#ff0000" : "#32cd32";
  return (
    <View>
      <HeaderCoinDetails
        image={small}
        name={name}
        symbol={symbol}
        market_data={market_cap_rank}
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.coinName}>{name}</Text>
          <Text style={styles.coinPrice}>$ {current_price.usd}</Text>
        </View>
        
        <View style={[styles.coinPercentage, { backgroundColor: percentageColor }]}>
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            color={"white"}
            size={11}
          />
          <Text
            style={{
              color: "white",
              marginHorizontal: 5,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CoinDetailsScreen;

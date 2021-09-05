import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CoinItem = ({ coin }) => {
  return (
    <View style={styles.container}>
      <View style={styles.coinName}>
        <Image style={styles.image} source={{ uri: coin.image }} />
        <View style={styles.contentNames}>
          <Text style={styles.text}>{coin.name}</Text>
          <Text style={styles.textSymbol}>{coin.symbol}</Text>
        </View>
      </View>

      <View style={styles.prices}>
        <Text style={styles.textPrice}>€{coin.current_price}</Text>
        <Text
          style={[
            styles.pricePercentage,
            coin.price_change_percentage_24h > 0
              ? styles.priceUp
              : styles.priceDown,
          ]}
        >
          {coin.price_change_percentage_24h}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  coinName: { flexDirection: "row" },
  image: { width: 30, height: 30 },

  contentNames: { marginLeft: 10 },
  text: { color: "#fff" },
  textPrice: { color: "#fff", textAlign: "right" },
  textSymbol: { color: "#434343", textTransform: "uppercase" },

  pricePercentage: { textAlign: "right" },
  priceUp: { color: "#32cd32" },
  priceDown: { color: "#ff0000" },
});

export default CoinItem;

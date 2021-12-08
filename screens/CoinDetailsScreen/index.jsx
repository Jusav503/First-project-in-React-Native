import React from "react";
import { Text, View, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel
} from "@rainbow-me/animated-charts";

import Coin from "../../assets/data/crypto.json";
import HeaderCoinDetails from "./components/HeaderCoinDetails";
import styles from "./styles";

const CoinDetailsScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    prices,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin;
  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";
  const WIDTH = Dimensions.get("window").width;
  const chartColor = current_price.usd > prices[0][1] ? "#16c784" : "#ea3943";
  
  const formatCurrency = (value) => {
    "worklet";
    if (value === "") {
      return `$${current_price.usd.toFixed(2)}`;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };
  return (
    <View>
      <ChartPathProvider
        data={{
          points: prices.map(([x, y]) => ({ x, y })),
          smoothingStrategy: "bezier",
        }}
      >
        <HeaderCoinDetails
          image={small}
          name={name}
          symbol={symbol}
          market_data={market_cap_rank}
        />
        <View style={styles.container}>
          <View>
            <Text style={styles.coinName}>{name}</Text>
            <ChartYLabel format={formatCurrency} style={styles.coinPrice} />
          </View>

          <View
            style={[
              styles.coinPercentage,
              { backgroundColor: percentageColor },
            ]}
          >
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

        <View>
          <ChartPath strokeWidth={2} height={WIDTH / 2} stroke={chartColor} width={WIDTH} />
          <ChartDot style={{ backgroundColor: chartColor }} />
        </View>
      </ChartPathProvider>
    </View>
  );
};

export default CoinDetailsScreen;

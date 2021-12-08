import React, { useState } from "react";
import { Text, View, Dimensions, TextInput } from "react-native";
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
  const percentageColor = price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";
  const WIDTH = Dimensions.get("window").width;
  const chartColor = current_price.usd > prices[0][1] ? "#16c784" : "#ea3943";
  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState(current_price.usd.toString());

  const formatCurrency = (value) => {
    "worklet";
    if (value === "") {
      return `$${current_price.usd.toFixed(2)}`;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };

  const changeCoinValue = (value) => {
    // console.warn(typeof value)
    setCoinValue(value);
    const floatValue = parseFloat(value.replace(',', '.' )) || 0
    setUsdValue((floatValue * current_price.usd).toString())
  };
  const changeUsdValue = (value) => {
    setUsdValue(value);
    const floatValue = parseFloat(value.replace(',', '.' )) || 0
    setCoinValue((floatValue / current_price.usd).toString())
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
        <View style={{padding: 15}}>
          <View style={styles.currentPriceContent}>
            <View>
              <Text style={styles.coinName}>{name}</Text>
              <ChartYLabel format={formatCurrency} style={styles.coinPrice} />
            </View>
          
            <View style={[ styles.coinPercentage, { backgroundColor: percentageColor }, ]}>
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
          
          
          <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:"row", flex:1, justifyContent:"center", alignItems:"center"}}>
              <Text style={{ color:"white" }}>{symbol.toUpperCase()}</Text>
              <TextInput style={styles.input} value={coinValue} keyboardType={"numeric"} onChangeText={changeCoinValue} />
            </View>
          
            <View style={{flexDirection:"row", flex:1, justifyContent:"center", alignItems:"center"}}>
              <Text style={{ color:"white" }}>USD</Text>
              <TextInput style={styles.input} value={usdValue.toString()} keyboardType={"numeric"} onChangeText={changeUsdValue} />
            </View>
          </View>
        </View>

      </ChartPathProvider>
    </View>
  );
};

export default CoinDetailsScreen;

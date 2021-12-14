import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, TextInput, ActivityIndicator } from "react-native";
import { Input } from 'react-native-elements';
import { AntDesign } from "@expo/vector-icons";
import { ChartDot, ChartPath, ChartPathProvider, ChartYLabel} from "@rainbow-me/animated-charts";
import { useRoute } from "@react-navigation/native"

import HeaderCoinDetails from "./components/HeaderCoinDetails";
import styles from "./styles";
import { getDetailCoinData, getCoinMarketChart } from "../../services/requests"

const CoinDetailsScreen = () => {
  const [coin, setCoin] = useState(null);
  const [coinMarketData, setCoinMarketData] = useState(null);
  const route = useRoute();
  const {params: {coinId}} = route;
  const [loading, setLoading] = useState(false);
  const [coinValue, setCoinValue] = useState("1");
  const [eurValue, setEurValue] = useState("");

  const fetchCoinData = async() => {
    setLoading(true);
    const fetchedCoinData = await getDetailCoinData(coinId);
    const fetchedCoinMarketData = await getCoinMarketChart(coinId);
    setCoin(fetchedCoinData);
    setCoinMarketData(fetchedCoinMarketData);
    setEurValue(fetchedCoinData.market_data.current_price.eur.toString())
    setLoading(false);
  }
  useEffect(() => {
    fetchCoinData();
  }, []);

  if(loading || !coin || !coinMarketData){
    return  <ActivityIndicator size="large" color="white" style={styles.loading} />
  }

  const {
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = coin;
  const { prices } = coinMarketData;

  const percentageColor = price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";
  const WIDTH = Dimensions.get("window").width;
  const chartColor = current_price.eur > prices[0][1] ? "#16c784" : "#ea3943";

  const formatCurrency = (value) => {
    "worklet";
    if (value === "") {
      return `€${current_price.eur.toFixed(2)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return `€${parseFloat(value).toFixed(2)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const changeCoinValue = (value) => {
    // console.warn(typeof value)
    setCoinValue(value);
    const floatValue = parseFloat(value) || 0
    setEurValue((floatValue * current_price.eur).toString())
  };
  const changeEurValue = (value) => {
    setEurValue(value);
    const floatValue = parseFloat(value) || 0
    setCoinValue((floatValue / current_price.eur.toFixed(2)).toString())
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
          coinId={coinId}
          image={small}
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
          
          {/* Chart */}
          <View>
            <ChartPath strokeWidth={2} height={WIDTH / 2} stroke={chartColor} width={WIDTH / 1.1} />
            <ChartDot style={{ backgroundColor: chartColor }} />
          </View>  
          
          {/* Inputs */}
          <View style={{flexDirection:"row", paddingTop: 10, justifyContent:"center", alignItems:"center"}}>
            <View style={{flexDirection:"row", flex:1, justifyContent:"center", alignItems:"center"}}>
              <Input
                value={coinValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                onChangeText={changeCoinValue}
                keyboardType={"numeric"} 
                inputContainerStyle={{width: 70}} 
                label={symbol.toUpperCase()}
                inputStyle={{color:"white"}}
              />
            </View>
            <Text style={{ color:"white", fontSize:40, marginHorizontal:10}}>=</Text>
            <View style={{flexDirection:"row", flex:2, justifyContent:"center", alignItems:"center"}}>
              <Text style={{ color:"white", fontSize:30, marginRight:5}}>EUR</Text>
              <Text style={{ color:"white", fontSize:30}}>{eurValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </View>
          </View>
        </View>

      </ChartPathProvider>
    </View>
  );
};

export default CoinDetailsScreen;

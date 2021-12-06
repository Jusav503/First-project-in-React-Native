import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

import styles from "./styles";

const CoinItem = ({ coin }) => {
  const percentageColor = coin.price_change_percentage_24h < 0 ? '#ff0000' : '#32cd32';
  return (
    <View style={styles.container}>
      <View style={styles.coinName}>
        <Image style={styles.image} source={{ uri: coin.image }} />
        <View>
          <Text style={{ color: "#fff", fontWeight:"bold", fontSize:18 }}>{coin.name}</Text>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={styles.rank}>{coin.market_cap_rank}</Text>
            <Text style={styles.textSymbol}>{coin.symbol}</Text>
          </View>
        </View>
      </View>

      <View style={styles.prices}>
        <Text style={styles.textPrice}>€{coin.current_price}</Text>
        <View style={{flexDirection:"row", alignItems:"center"}}>
          <AntDesign
            name={coin.price_change_percentage_24h < 0 ? 'caretdown' : 'caretup' }
            color={percentageColor}
            size={11}
          />
          <Text style={{color: percentageColor, marginHorizontal:5, fontSize:11}}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CoinItem;

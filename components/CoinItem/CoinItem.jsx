import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native"

import styles from "./styles";
import atoms from "../atoms";

const CoinItem = ({ coin }) => {
  
  const percentageColor = coin.price_change_percentage_24h < 0 ? '#ff0000' : '#32cd32' || "white";
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Details", {coinId: coin.id})}>
      <View style={styles.coinName}>
        <Image style={atoms.smallImage} source={{ uri: coin.image }} />
        <View>
          <Text style={atoms.mediumText}>{coin.name}</Text>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={styles.rank}>{coin.market_cap_rank}</Text>
            <Text style={styles.textSymbol}>{coin.symbol}</Text>
          </View>
        </View>
      </View>

      <View style={styles.prices}>
        <Text style={styles.textPrice}>€{coin.current_price}</Text>
        <View style={atoms.rowNbtw}>
          <AntDesign
            name={coin.price_change_percentage_24h < 0 ? 'caretdown' : 'caretup' }
            color={percentageColor}
            size={10}
          />
          <Text style={{color: percentageColor, marginHorizontal:5, fontSize:11}}>
            {coin.price_change_percentage_24h?.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoinItem;

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CoinItem from "./components/CoinItem";

export default function App() {
  const [coins, setCoins] = useState([]);

  const loadData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    setCoins(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View>
      <FlatList
        data={coins}
        renderItem={({ item }) => {
          return <CoinItem coin={item}/>
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

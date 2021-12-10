import React from "react";
import { Text, SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const HeaderCoinDetails = (props) => {
  const { image, name, symbol, market_data } = props;
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Ionicons name="chevron-back" size={25} color="white" />
        </TouchableOpacity>
        <View style={styles.coinInfo}>
          <Image source={{ uri: image }} style={styles.coinImage} />
          <View style={{ flexDirection: "row", alignItems: "center"}}>
            <Text style={styles.coinRank}># {market_data}</Text>
            <Text style={styles.coinSymbol}>{symbol.toUpperCase()}</Text>
          </View>
        </View>
        <Feather name="user" size={25} color="white" />
      </View>
    </SafeAreaView>
  );
};

export default HeaderCoinDetails;

import React from "react";
import { View, Text, Image } from "react-native";

import atoms from "../../../../components/atoms";
import styles from "../PortfolioAssetItem/styles";
import { AntDesign } from '@expo/vector-icons'; 

const PortfolioAssetItem = () => {
  return (
    <View style={atoms.rowNbtw}>
      <View style={atoms.rowNbtw}>
        <Image source={{ uri: "https://www.cointribune.com/app/uploads/2021/08/4-prichiny-predstojashhego-rosta-kursa-bitcoin-btc-b32f43b.jpg"}}style={atoms.smallImage}/>
        <View>
          <Text style={atoms.mediumText}>Bitcoin</Text>
          <Text style={atoms.tcs}>BTC</Text>
        </View>
      </View>

      <View>
        <Text style={atoms.mediumText}>€1000</Text>
        <View style={atoms.rowNbtw}>
          <AntDesign name="caretup" color="#32cd32" size={10}/>
          <Text style={{ color: "#32cd32", marginHorizontal: 5, fontSize: 11,}}>
            1.12%
          </Text>
        </View>
      </View>

      <View>
        <Text style={atoms.mediumText}>€2000</Text>
        <Text style={atoms.tcs}>10 BTC</Text>
      </View>
    </View>
  );
};

export default PortfolioAssetItem;

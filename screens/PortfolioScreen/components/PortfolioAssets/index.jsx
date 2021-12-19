import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import atoms from "../../../../components/atoms";
import CustomButtom from "../../../../components/CustomButtom";
import PortfolioAssetItem from "../PortfolioAssetItem";

const PortfolioAssets = () => {
  return (
    <View style={{ padding: 15 }}>
      <FlatList
        data={[{id:"btc"}]}
        renderItem={({item}) => <PortfolioAssetItem asset={item} />}
        ListHeaderComponent={
          <>
            <View style={atoms.rowNbtw}>
              <View>
                <Text style={atoms.mediumText}>Current Balance</Text>
                <Text style={atoms.bigNumber}>€1000</Text>
                <Text style={{ color: "white" }}>€2000(allTime)</Text>
              </View>
              <View
                style={[
                  atoms.coinPercentageContainer,
                  { backgroundColor: "red" },
                ]}
              >
                <AntDesign name="caretdown" color="white" size={11} />
                <Text style={atoms.coinPercentage}>1.2%</Text>
              </View>
            </View>
            <View style={{ paddingTop: 10 }}>
              <Text style={atoms.largeText}>Your Assets</Text>
            </View>
          </>
        }
        ListFooterComponent={
          <TouchableOpacity style={{ paddingTop: 10 }}>
            <CustomButtom
              backgroundColor="#353535"
              FontAwesomeIcon="plus-square-o"
              colorIcon="white"
              title="Add new Asset"
              colorTitle="white"
            />
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default PortfolioAssets;

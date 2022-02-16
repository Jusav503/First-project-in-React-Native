import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";
import { useRecoilState } from "recoil";

import { allPortfolioBoughtAssetsInStorage } from "../../atoms/PortfolioAssets";
import atoms from "../../components/atoms";
import CustomButtom from "../../components/CustomButtom";
import HeaderAddNewAsset from "./components/HeaderAddNewAsset";
import styles from "./styles";
import { getAllCoins } from "../../services/requests";

const AddNewScreen = () => {
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [boughtAssetQuantity, setBoughtAssetQuantity] = useState("");
  const [assetsInStorage, setAssetsInStorage] = useRecoilState(
    allPortfolioBoughtAssetsInStorage
  );
  const [selectedCoinId, setSelectedCoinId] = useState(false);

  const fetchAllCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const fetchedAllCoins = await getAllCoins();
    setAllCoins(fetchedAllCoins);
    setLoading(false);
  };
  useEffect(() => {
    fetchAllCoins();
  }, []);

  const isQuantityEntered = () => boughtAssetQuantity === ""
  // const onAddNewAsset = () => {};

  return (
    <View style={{ flex: 1 }}>
      <HeaderAddNewAsset />
      <View style={{ padding: 15, flex: 1 }}>
        <SearchableDropdown
          items={allCoins}
          onItemSelect={(item) => setSelectedCoinId(item.id)}
          containerStyle={styles.dropdownContainer}
          itemStyle={styles.item}
          itemTextStyle={{ color: "white" }}
          resetValue={false}
          placeholder={selectedCoinId || "Select a coin..."}
          placeholderTextColor="white"
          textInputProps={{
            underlineColorAndroid: "transparent",
            style: {
              padding: 12,
              borderWidth: 1.5,
              borderColor: "#444444",
              borderRadius: 5,
              backgroundColor: "#1e1e1e",
              color: "white",
            },
          }}
        />

        {selectedCoinId && (
          <>
            <View style={{ alignItems: "center", flex: 1 }}>
              <View style={atoms.rowCenter}>
                <TextInput
                  value={boughtAssetQuantity}
                  onChangeText={setBoughtAssetQuantity}
                  keyboardType="numeric"
                  placeholder="0"
                  placeholderTextColor="grey"
                  style={{ color: "white", fontSize: 80 }}
                />
                <Text style={atoms.tcs}>BTC</Text>
              </View>
              <Text style={atoms.tcs}>€12,424.55 per coin</Text>
            </View>

            <TouchableOpacity onPress={() => console.log("Add new Asset pressed")} disabled={isQuantityEntered()}>
              <CustomButtom
                opacity={isQuantityEntered() ? 0.2 : 1}
                backgroundColor="#353535"
                FontAwesomeIcon="plus-square-o"
                colorIcon="white"
                title="Add new Asset"
                colorTitle="white"
              />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default AddNewScreen;

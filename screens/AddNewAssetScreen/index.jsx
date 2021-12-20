import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";

import atoms from "../../components/atoms";
import CustomButtom from "../../components/CustomButtom";
import HeaderAddNewAsset from "./components/HeaderAddNewAsset";
import styles from "./styles";

const AddNewScreen = () => {
  const [boughtAssetQuantity, setBoughtAssetQuantity] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <HeaderAddNewAsset />
      <View style={{ padding: 15, flex: 1 }}>
        <SearchableDropdown
          items={[]}
          onItemSelect={(item) => console.log(item)}
          containerStyle={styles.dropdownContainer}
          itemStyle={styles.item}
          itemTextStyle={{ color: "white" }}
          resetValue={false}
          placeholder={"Select a coin..."}
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
        <CustomButtom
          style={{ flex: 1 }}
          backgroundColor="#353535"
          FontAwesomeIcon="plus-square-o"
          colorIcon="white"
          title="Add new Asset"
          colorTitle="white"
        />
      </View>
    </View>
  );
};

export default AddNewScreen;

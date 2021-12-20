import React from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const HeaderAddNewAsset = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HeaderAddNewAsset;

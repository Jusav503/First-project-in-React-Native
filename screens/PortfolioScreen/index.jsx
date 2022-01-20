import React, { Suspense } from "react";
import { View, Text } from "react-native";
import PortfolioAssets from "./components/PortfolioAssets";

const PortfolioScreen = () => {
  return (
    <View>
      <Suspense
        fallback={<Text style={{ color: "white" }}>Loading please wait</Text>}
      >
        <PortfolioAssets />
      </Suspense>
    </View>
  );
};

export default PortfolioScreen;

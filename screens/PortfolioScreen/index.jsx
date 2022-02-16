import React, { Suspense } from "react";
import { View, Text } from "react-native";
import atoms from "../../components/atoms";
import PortfolioAssets from "./components/PortfolioAssets";

const PortfolioScreen = () => {
  return (
    <View style={{flex: 1 }}>
      <Suspense
        fallback={<View style={atoms.contentCenter}>
          <Text style={{color:"white"}}>Loading please wait</Text>
        </View>}
      >
        <PortfolioAssets />
      </Suspense>
    </View>
  );
};

export default PortfolioScreen;

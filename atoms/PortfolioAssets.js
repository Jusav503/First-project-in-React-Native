import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { atom, selector } from "recoil";

export const allPortfolioBoughtAssets = selector({
  key: "allPortfolioBoughtAssets",
  get: async () => {
    const jsonValue = await AsyncStorageLib.getItem('@portfolio_coins')
    return jsonValue != null ? jsonValue(jsonValue) : [];
  },
});

export const allPortfolioAssets = atom({
  key: "allPortfolioAssets",
  default: allPortfolioBoughtAssets,
});


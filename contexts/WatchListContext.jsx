import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WatchlistContext = React.createContext();
export const useWatchlist = () => React.useContext(WatchlistContext);

const WatchlistProvider = ({ children }) => {
  const [watchlistCoinIds, setWatchlistCoinIds] = useState([]);
  
  const getWatchlistData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@watchlist_coins");
      setWatchlistCoinIds(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getWatchlistData();
  }, []);

  const storeWatchlistCoinId = async (coinId) => {
    try {
      const newWatchList = [...watchlistCoinIds, coinId];
      const jsonValue = JSON.stringify(newWatchList);
      await AsyncStorage.setItem("@watchlist_coins", jsonValue);
      setWatchlistCoinIds(newWatchList);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteWatchlistCoinId = async (coinId) => {
    const newWatchList = watchlistCoinIds.filter(
      (coinValueId) => coinValueId !== coinId
    );
    const jsonValue = JSON.stringify(newWatchList);
    await AsyncStorage.setItem("@watchlist_coins", jsonValue);
    setWatchlistCoinIds(newWatchList);
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlistCoinIds, storeWatchlistCoinId, deleteWatchlistCoinId }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistProvider;

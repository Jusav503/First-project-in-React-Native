import axios from "axios";

export const getDetailCoinData = async (coinId) => {
  try {
    const r = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&community_data=false&developer_data=false&sparkline=false`);
    return r.data;
  } catch (e) {
    console.log(e);
  }
};

export const getCoinMarketChart = async (coinId) => {
  try {
    const r = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=eur&days=1&interval=minutely`);
    return r.data;
  } catch (e) {
    console.log(e);
  }
};

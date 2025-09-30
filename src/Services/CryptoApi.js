const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-cR9GNpJCNiiTMYGeYK67fUyh";

const getCoinList = (page, currency) => {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`;
};

const SearchCoin = (query) => {
  return `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`;
};

const marketChart = (coin) => {
  return `${BASE_URL}/coins/${coin}/market_chart/?vs_currency=usd&days=7`;
};

export { getCoinList, SearchCoin, marketChart };

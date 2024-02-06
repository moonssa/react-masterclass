const BASE_URL = "https://api.coinpaprika.com/v1";
export async function fetchCoins() {
  const json = await (await fetch(`${BASE_URL}/coins`)).json();
  return json;
}

export async function fetchCoinInfo(coinId: string) {
  const infoData = await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
  return infoData;
}

export async function fetchCoinTickers(coinId: string) {
  const priceData = await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
  return priceData;
}

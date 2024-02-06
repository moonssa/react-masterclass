const BASE_URL = "https://api.coinpaprika.com/v1";
const HISTORY_URL = "https://ohlcv-api.nomadcoders.workers.dev";
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

export async function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 24 * 7 * 60 * 60;
  console.log(endDate);
  console.log(Date.now());

  const historyData = await (
    await fetch(`${HISTORY_URL}?coinId=${coinId}`)
  ).json();

  return historyData;
}

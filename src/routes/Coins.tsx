import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.h3`
  text-align: center;
`;
const Container = styled.div`
  padding: 0 20px;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    transition: color 0.2s ease-in;
    display: block;
  }
  &:hover a {
    color: ${(props) => props.theme.accentColor};
  }
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const json = await (
        await fetch("https://api.coinpaprika.com/v1/coins")
      ).json();
      setCoins(json.slice(0, 99));
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title> Coins</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              {" "}
              <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;

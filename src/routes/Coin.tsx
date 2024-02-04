import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
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

interface RouteParams {
  coinId: string;
}
interface RouteState {
  name: string;
}
function Coin() {
  const { coinId } = useParams<RouteParams>();
  const [loading, setLoading] = useState(true);
  const { state } = useLocation<RouteState>();
  return (
    <Container>
      <Header>
        <Title>코인 {state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;

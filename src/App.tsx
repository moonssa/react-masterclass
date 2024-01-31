import React from "react";
import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: tomato;
  &:hover {
    color: teal;
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  ${Title}:hover {
    font-size: 99px;
  }
`;
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;

  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;
const Emoji = styled.span`
  font-size: 56px;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotateAnimation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 150px;
    }
    &:active {
      opacity: 0;
    }
  }
`;
function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
      <Title as="h3">Me</Title>
      <Box>
        <Emoji>🤩</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;

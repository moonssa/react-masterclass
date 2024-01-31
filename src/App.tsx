import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
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
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotateAnimation} 1s linear infinite;
  span {
    font-size: 56px;
    &:hover {
      font-size: 100px;
    }
    &:active {
      opacity: 0;
    }
  }
`;
function App() {
  return (
    <Wrapper>
      <Box>
        <span>🤩</span>
      </Box>
    </Wrapper>
  );
}

export default App;

import React from "react";
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  padding: 10px;
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;
function App() {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Input />
      {/* <Btn>Login</Btn>
      <Btn as="a" href="/">
        Login
      </Btn>
      <Box bgColor="teal" />
      <Box bgColor="orange" />
      <Circle bgColor="tomato" /> */}
    </Father>
  );
}

export default App;

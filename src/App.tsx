import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;

  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 2, rotateZ: 45 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgb(46,204,113)", transition: { duration: 10 } },
};

function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [500, 0, -500], [2, 1, 0.1]);
  useMotionValueEvent(scale, "change", (coord) => {
    console.log("x changed to", coord);
  });
  // scale.on("change", (coord) => console.log(coord));

  return (
    <Wrapper>
      <button onClick={() => x.set(200)}>Click me</button>
      <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;

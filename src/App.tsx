import styled from "styled-components";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;

const boxVariants = {
  hover: { scale: 2, rotateZ: 45 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgb(46,204,113)", transition: { duration: 10 } },
};

const svg = {
  start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
  end: {
    pathLength: 1,
    fill: "rgba(255,255,255,1)",
  },
};

const boxForPreVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
    transition: { duration: 1 },
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50,
    transition: { duration: 1.5 },
  },
};
const boxSlideVariants = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    rotateX: 180,
    transition: {
      duration: 1,
    },
  }),
};
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  /* top: 100px; */
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 50, scale: 1 }} />
        ) : null}
      </Box>
      <Box>
        {clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} />
        ) : null}
      </Box>
    </Wrapper>
  );
}

export default App;

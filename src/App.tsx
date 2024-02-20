import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
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
  // const scale = useTransform(x, [500, 0, -500], [2, 1, 0.1]);
  const rotateZ = useTransform(x, [-500, 500], [-360, 360]);

  const gradient = useTransform(
    x,
    [-500, 0, 500],
    [
      "linear-gradient(135deg, rgb(238, 0, 48), rgb(4, 13, 82))",
      "linear-gradient(135deg, rgb(238, 0, 153), rgb(91, 0, 216))",
      "linear-gradient(135deg, rgb(0, 238, 32), rgb(0, 180, 216))",
    ]
  );

  const { scrollY, scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  useMotionValueEvent(scrollY, "change", () => {
    console.log("y changed to", scrollY.get(), scrollYProgress.get());
  });

  return (
    <Wrapper style={{ background: gradient }}>
      <button onClick={() => x.set(200)}>Click me</button>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;

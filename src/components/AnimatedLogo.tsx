import React, { ReactElement } from "react";
import { chakra, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ChakraImg = chakra(motion.div);
const spriteAnimationX = keyframes`
  0% { background-position-x: -1px}
  100% { background-position-x: -1502px}
`;
const spriteAnimationY = keyframes`
  0% { background-position-y: -1px; }
  100% { background-position-y: -1432px; }
`;
const spriteAnimationReverseX = keyframes`
  0% { background-position-x: -1502px}
  100% { background-position-x: -1px}
`;
const spriteAnimationReverseY = keyframes`
  0% { background-position-y: -1432px; }
  100% { background-position-y: -1px; }
`;

export const AnimatedLogo = (): ReactElement => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isReverse, setIsReverse] = useBoolean();

  const animationStatus = {
    lineal: `
      ${spriteAnimationX} 0.2s steps(4),
      ${spriteAnimationY} 0.6s steps(6) 
    `,
    reverse: `
      ${spriteAnimationReverseX} 0.2s steps(4),
      ${spriteAnimationReverseY} 0.6s steps(6)  
    `,
  };
  const animation = prefersReducedMotion
    ? undefined
    : animationStatus[isReverse ? "reverse" : "lineal"];

  return (
    <ChakraImg
      onClick={setIsReverse.toggle}
      backgroundImage="url('/assets/presentation-sprite.png')"
      w="373px"
      h="237px"
      transform={{ md: "scale(1.1)", sm: "scale(0.6)" }}
      mb={{ md: "30px", sm: "0px" }}
      bgPosition={isReverse ? "-1px -1px" : "-1px -1196px"}
      animation={animation}
      animate={{
        opacity: 1,
      }}
      objectFit="none"
    />
  );
};

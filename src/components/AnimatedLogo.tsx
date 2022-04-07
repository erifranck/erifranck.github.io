import React, { ReactElement } from "react";
import { chakra, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ChakraImg = chakra(motion.div);
const spriteAnimationX = keyframes`
  0% { background-position-x: -1px}
  100% { background-position-x: -1126px}
`;
const spriteAnimationY = keyframes`
  0% { background-position-y: -1px; }
  100% { background-position-y: -1196px; }
`;
const spriteAnimationReverseX = keyframes`
  0% { background-position-x: -1126px}
  100% { background-position-x: -1px}
`;
const spriteAnimationReverseY = keyframes`
  0% { background-position-y: -1196px; }
  100% { background-position-y: -1px; }
`;

export const AnimatedLogo = (): ReactElement => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isReverse, setIsReverse] = useBoolean();

  const animationStatus = {
    lineal: `
      ${spriteAnimationX} 0.2s steps(3) 1,
      ${spriteAnimationY} 0.8s steps(5) 1 
    `,
    reverse: `
      ${spriteAnimationReverseX} 0.2s steps(3) 1,
      ${spriteAnimationReverseY} 0.8s steps(5) 1 
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
      transform="scale(1.5)"
      mb="30px"
      bgPosition={isReverse ? "-1px -1px" : "-1px -1196px"}
      animation={animation}
      animate={{
        opacity: 1,
      }}
      objectFit="none"
    />
  );
};

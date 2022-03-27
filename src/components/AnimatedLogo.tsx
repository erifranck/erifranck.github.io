import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { Flex, Img } from "@chakra-ui/react";

export const AnimatedLogo = (): ReactElement => {
  const [imageIndex, setImageIndex] = useState(1);
  const [hasBeenAnimated, setHasBeenAnimated] = useState(false);
  const logoPrefix = "Presentacion-";
  const frameLimit = 21;
  const nexFrame = useCallback(() => {
    setImageIndex((prevState) => {
      if (prevState < frameLimit) {
        return prevState + 1;
      }
      return prevState;
    });
  }, []);
  const prevFrame = useCallback(() => {
    setImageIndex((prevState) => {
      if (prevState > 1) {
        return prevState - 1;
      }
      return prevState;
    });
  }, []);
  const startAnimation = useCallback((firstFrame = 1) => {
    if (firstFrame < frameLimit) {
      requestAnimationFrame(nexFrame);
      setTimeout(() => {
        startAnimation(firstFrame + 1);
      }, 50);
      return;
    }
    setHasBeenAnimated(true);
  }, []);
  const reverseAnimation = useCallback((lastFrame = frameLimit) => {
    if (lastFrame > 1) {
      requestAnimationFrame(prevFrame);
      setTimeout(() => {
        reverseAnimation(lastFrame - 1);
      }, 50);
    }
  }, []);
  const toggleAnimation = useCallback(() => {
    if (!hasBeenAnimated) {
      startAnimation();
    } else {
      reverseAnimation();
      setHasBeenAnimated(false);
    }
  }, [hasBeenAnimated, reverseAnimation, startAnimation]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);
  return (
    <Flex
      justifyContent="center"
      alignItems="flex-start"
      w="517px"
      h="280px"
      pl="30px"
      onClick={() => toggleAnimation()}
      overflow="hidden"
    >
      <Img
        w="1100px"
        mt="-160px"
        objectFit="cover"
        src={`/assets/presentacion/${logoPrefix}${imageIndex}.png`}
      />
    </Flex>
  );
};

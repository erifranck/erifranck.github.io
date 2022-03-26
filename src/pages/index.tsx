import React from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { AnimatedLogo } from "../components/AnimatedLogo";
import { SocialMedia } from "../components/SocialMedia";
import { Header } from "../components/Header";

export const Main = () => {
  return (
    <Box w="100vw" h="100vh">
      <Flex justifyContent="center" h="45%" w="100%" alignItems="flex-end">
        <AnimatedLogo />
      </Flex>
      <Box>
        <Center>
          <Box>
            <Text
              fontFamily="abel"
              textTransform="uppercase"
              fontSize="48px"
              textAlign="center"
              mb="10px"
            >
              Erifranck Nuñez
            </Text>
            <Text
              fontFamily="abel"
              textTransform="uppercase"
              fontSize="24px"
              mt="10px"
              textAlign="center"
            >
              Frontend Developer
            </Text>
            <Center mb="24px">
              <SocialMedia />
            </Center>
            <Center>
              <Header />
            </Center>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

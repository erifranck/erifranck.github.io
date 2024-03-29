import React from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { AnimatedLogo } from "../components/AnimatedLogo";
import { SocialMedia } from "../components/SocialMedia";
import { Header } from "../components/Header";

export const Main = () => {
  return (
    <Box w="100vw" h="100vh" boxSizing="border-box">
      <Flex
        justifyContent="center"
        h={{ md: "45%", sm: "auto" }}
        w="100%"
        mt={{ md: "0px", sm: "10px" }}
        alignItems="flex-end"
      >
        <AnimatedLogo />
      </Flex>
      <Box>
        <Center>
          <Box>
            <Text
              fontFamily="abel"
              textTransform="uppercase"
              fontSize={{ md: "48px", sm: "24px" }}
              textAlign="center"
              mt={{ md: "48px", sm: "0px" }}
              mb="10px"
            >
              Erifranck Nuñez
            </Text>
            <Text
              fontFamily="abel"
              textTransform="uppercase"
              fontSize={{ md: "24px", sm: "14px" }}
              mt="10px"
              textAlign="center"
            >
              Frontend Developer
            </Text>
            <Center mb={{ md: "24px", sm: "0px" }}>
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

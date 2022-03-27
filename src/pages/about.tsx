import React from "react";
import { Box, Center, Flex, HStack, Img, Text } from "@chakra-ui/react";
import { SocialMedia } from "../components/SocialMedia";
import { Header } from "../components/Header";

export const About = () => {
  return (
    <Box w="100vw" h="100vh" boxSizing="border-box" pt="40px">
      <Center h="65%">
        <HStack h="100%" w="60%" spacing="50px">
          <Box h="100%">
            <Img src="/assets/pokemonTrainer.png" h="100%" />
          </Box>
          <Flex alignItems="space-between" h="100%" flexWrap="wrap">
            <Box w="100%">
              <Text
                fontFamily="abel"
                textTransform="uppercase"
                fontSize="48px"
                textAlign="left"
                mb="10px"
              >
                Erifranck Nuñez
              </Text>
              <Text
                fontFamily="abel"
                textTransform="uppercase"
                fontSize="24px"
                mt="10px"
                textAlign="left"
              >
                Frontend Developer
              </Text>
              <Text
                fontFamily="abel"
                textTransform="uppercase"
                fontSize="16px"
                mt="0px"
                textAlign="left"
              >
                Hola soy Senior Frontend Developer, Ilustrador, amante de la
                animacion. Me encanta compartir contenido didactico sobre
                programacion, ademas de compartir mis ilustraciones donde
                incluyo mi web comic “Draw my code” donde muestro historias de
                cosas comunes que nos pasa en el mundo del desarrollo de
                software.
              </Text>
              <Text
                fontFamily="abel"
                textTransform="uppercase"
                fontSize="16px"
                textAlign="left"
              >
                Soy Venezolano, entrenador pokemon y amante de la gastronomia,
                asi que podemos reunirnos en un cafe o restaurante para hablar
                de lo que nos apasiona. Espero te guste lo que comparto y te
                dejo mis redes sociales para que me sigas.
              </Text>
              <Text
                fontFamily="abel"
                textTransform="uppercase"
                fontSize="16px"
                textAlign="left"
              >
                Si eres un reclutador aqui puedes descargar mi CV.
              </Text>
            </Box>
            <Box mb="24px" alignSelf="flex-end">
              <SocialMedia />
            </Box>
          </Flex>
        </HStack>
      </Center>
      <Box>
        <Center>
          <Header />
        </Center>
      </Box>
    </Box>
  );
};

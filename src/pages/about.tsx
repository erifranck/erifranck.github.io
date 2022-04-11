import React from "react";
import {
  Box,
  Center,
  Flex,
  Icon,
  IconButton,
  Img,
  Text,
} from "@chakra-ui/react";
import { SocialMedia } from "../components/SocialMedia";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Header } from "../components/Header";
import { useLinkClickHandler } from "react-router-dom";

export const About = () => {
  const linkHandler = useLinkClickHandler<HTMLButtonElement>("/");

  return (
    <Box
      w="100vw"
      h="100vh"
      boxSizing="border-box"
      pt="40px"
      position="relative"
    >
      <IconButton
        aria-label=""
        icon={<Icon as={MdKeyboardArrowLeft} />}
        bg="transparent"
        fontSize="24px"
        display={{ md: "none", sm: "block" }}
        position="absolute"
        onClick={linkHandler}
        left="30px"
      />
      <Center h={{ md: "65%", sm: "min-content" }}>
        <Flex
          h="100%"
          w={{ md: "60%", sm: "100%" }}
          alignItems={{ md: "flex-end" }}
          flexDir={{ md: "row", sm: "column" }}
        >
          <Flex
            h="70%"
            mr={{ md: "50px", sm: "0px" }}
            w={{ md: "50%", sm: "100%" }}
          >
            <Img
              src="/assets/pokemonTrainer.png"
              m="auto"
              d="block"
              h={{ md: "100%", sm: "auto" }}
              w={{ md: "auto", sm: "200px" }}
            />
          </Flex>
          <Flex
            alignItems="space-between"
            h="70%"
            flexWrap="wrap"
            w={{ md: "40%", lg: "50%", sm: "100%" }}
          >
            <Box w="100%" p={{ md: "0px", sm: "0px 40px" }}>
              <Text
                fontFamily="abel"
                textTransform="uppercase"
                fontSize="48px"
                textAlign={{ md: "left", sm: "center" }}
                mb="10px"
              >
                Erifranck Nuñez
              </Text>
              <Text
                fontFamily="abel"
                textTransform="uppercase"
                fontSize="24px"
                mt="10px"
                mb={{ md: "20px", sm: "10px" }}
                textAlign={{ md: "left", sm: "center" }}
              >
                Frontend Developer
              </Text>
              <Center
                mb="24px"
                alignSelf="flex-end"
                display={{ md: "none", sm: "flex" }}
              >
                <SocialMedia />
              </Center>
              <Text
                fontFamily="abel"
                textTransform="uppercase"
                fontSize="16px"
                mt="0px"
                mb={{ md: "0px", sm: "40px" }}
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
                mb={{ md: "0px", sm: "40px" }}
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
                mb={{ md: "0px", sm: "40px" }}
              >
                Si eres un reclutador aqui puedes descargar mi CV.
              </Text>
            </Box>
            <Box
              mb="24px"
              alignSelf="flex-end"
              display={{ md: "flex", sm: "none" }}
            >
              <SocialMedia />
            </Box>
          </Flex>
        </Flex>
      </Center>
      <Box>
        <Center display={{ md: "flex", sm: "none" }}>
          <Header />
        </Center>
      </Box>
    </Box>
  );
};

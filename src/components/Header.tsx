import React from "react";
import { Flex, Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const linkList: { label: string; path: string; isExternal?: boolean }[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Web Comic", path: "https://drawmy.codes/", isExternal: true },
  { label: "Blog", path: "https://medium.com/@erifranckN", isExternal: true },
];
const ActiveStyles: LinkProps = {
  bg: { sm: "black", md: "transparent" },
  color: { sm: "white", md: "black" },
  borderBottom: { sm: "1px solid black" },
};
const DefaultStyles: LinkProps = {
  border: { sm: "1px solid black", md: "none" },
};

export const Header = () => {
  const location = useLocation();
  return (
    <Flex
      border={{ md: "1px solid black", sm: "none" }}
      p="17px 35px"
      h="68px"
      boxSizing="border-box"
    >
      <Flex flexDir={{ md: "row", sm: "column" }}>
        {linkList.map((item, index) => {
          const styles =
            location.pathname === item.path ? ActiveStyles : DefaultStyles;
          return (
            <ChakraLink
              color="black"
              as={item.isExternal ? undefined : Link}
              boxSizing="border-box"
              {...styles}
              key={index}
              isExternal={item.isExternal}
              href={item.path}
              to={item.path}
              fontSize={{ md: "24px", sm: "18px" }}
              transition="0.6s"
              fontFamily="abel"
              p={{ md: "0px", sm: "10px 20px" }}
              textAlign={{ md: "left", sm: "center" }}
              mr={{
                md: index < linkList.length - 1 ? "100px" : "0px",
                sm: "0px",
              }}
              mb={{ md: "0px", sm: "20px" }}
              textDecor="none"
              _hover={{
                bg: { sm: "black", md: "transparent" },
                color: { sm: "white", md: "black" },
                borderBottom: "1px solid black",
              }}
              _active={{
                borderBottom: "1px solid black",
              }}
            >
              {item.label}
            </ChakraLink>
          );
        })}
      </Flex>
    </Flex>
  );
};

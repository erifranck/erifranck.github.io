import React from "react";
import { Flex, Link } from "@chakra-ui/react";

const linkList: { label: string; path: string; isExternal?: boolean }[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Web Comic", path: "https://drawmy.codes/", isExternal: true },
  { label: "Blog", path: "https://medium.com/@erifranckN", isExternal: true },
];
export const Header = () => {
  return (
    <Flex
      border={{ md: "1px solid black", sm: "none" }}
      p="17px 35px"
      h="68px"
      boxSizing="border-box"
    >
      <Flex flexDir={{ md: "row", sm: "column" }}>
        {linkList.map((item, index) => (
          <Link
            boxSizing="border-box"
            key={index}
            href={item.path}
            color="black"
            fontSize="24px"
            transition="0.6s"
            fontFamily="abel"
            p={{ md: "0px", sm: "10px 20px" }}
            textAlign={{ md: "left", sm: "center" }}
            mr={{
              md: index < linkList.length - 1 ? "100px" : "0px",
              sm: "0px",
            }}
            mb={{ md: "0px", sm: "100px" }}
            textDecor="none"
            _hover={{
              border: { md: "none", sm: "1px solid black" },
              borderBottom: "1px solid black",
            }}
            _active={{
              borderBottom: "1px solid black",
            }}
          >
            {item.label}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

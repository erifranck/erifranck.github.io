import React from "react";
import { Flex, HStack, Link } from "@chakra-ui/react";

const linkList: { label: string; path: string; isExternal?: boolean }[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Web Comic", path: "https://drawmy.codes/", isExternal: true },
  { label: "Blog", path: "https://medium.com/@erifranckN", isExternal: true },
];
export const Header = () => {
  return (
    <Flex
      border="1px solid black"
      p="17px 35px"
      h="68px"
      boxSizing="border-box"
    >
      <HStack spacing="100px">
        {linkList.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            color="black"
            fontSize="24px"
            fontFamily="abel"
            textDecor="none"
            _hover={{
              borderBottom: "1px solid black",
            }}
            _active={{
              borderBottom: "1px solid black",
            }}
          >
            {item.label}
          </Link>
        ))}
      </HStack>
    </Flex>
  );
};

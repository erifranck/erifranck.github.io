import React, { useCallback } from "react";
import { HStack, Icon, IconButton } from "@chakra-ui/react";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import TikTokIcon from "../icons/Tiktok";

export const SocialMedia = () => {
  const onRedirect = useCallback(
    (url: string) => () => window.open(url, "_blank"),
    []
  );
  return (
    <HStack spacing="15px">
      <IconButton
        aria-label=""
        color="#9C9C9C"
        border="none"
        outline="none"
        fontSize="30px"
        backgroundColor="transparent"
        icon={<Icon as={TikTokIcon} />}
        onClick={onRedirect("https://www.tiktok.com/@erifranck")}
      />
      <IconButton
        aria-label=""
        color="#9C9C9C"
        border="none"
        outline="none"
        fontSize="30px"
        backgroundColor="transparent"
        icon={<Icon as={AiFillYoutube} />}
        onClick={onRedirect("https://www.youtube.com/c/erifrancknunez")}
      />
      <IconButton
        aria-label=""
        color="#9C9C9C"
        border="none"
        outline="none"
        fontSize="30px"
        backgroundColor="transparent"
        icon={<Icon as={AiFillLinkedin} />}
        onClick={onRedirect("https://www.linkedin.com/in/erifranck/")}
      />
      <IconButton
        aria-label=""
        color="#9C9C9C"
        border="none"
        outline="none"
        fontSize="30px"
        backgroundColor="transparent"
        icon={<Icon as={AiFillTwitterSquare} />}
        onClick={onRedirect("https://www.twitter.com/@erifranckn")}
      />

      <IconButton
        aria-label=""
        color="#9C9C9C"
        border="none"
        outline="none"
        fontSize="30px"
        backgroundColor="transparent"
        icon={<Icon as={RiInstagramFill} />}
        onClick={onRedirect("https://www.instagram.com/erifranck")}
      />
    </HStack>
  );
};

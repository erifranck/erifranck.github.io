import React, { useCallback } from "react";
import { HStack, Icon, IconButton } from "@chakra-ui/react";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import TikTokIcon from "../icons/Tiktok";
import { IconType } from "react-icons";

const networkList: { icon: IconType; url: string }[] = [
  { icon: TikTokIcon, url: "https://www.tiktok.com/@erifranck" },
  { icon: AiFillYoutube, url: "https://www.youtube.com/c/erifrancknunez" },
  { icon: AiFillTwitterSquare, url: "https://www.twitter.com/@erifranckn" },
  { icon: AiFillLinkedin, url: "https://www.linkedin.com/in/erifranck/" },
  { icon: RiInstagramFill, url: "https://www.instagram.com/erifranck" },
  { icon: AiFillGithub, url: "https://github.com/erifranck" },
];

export const SocialMedia = () => {
  const onRedirect = useCallback(
    (url: string) => () => window.open(url, "_blank"),
    []
  );
  return (
    <HStack spacing="15px">
      {networkList.map((social, index) => (
        <IconButton
          aria-label=""
          color="#9C9C9C"
          border="none"
          outline="none"
          fontSize="30px"
          backgroundColor="transparent"
          icon={<Icon as={social.icon} />}
          onClick={onRedirect(social.url)}
        />
      ))}
    </HStack>
  );
};

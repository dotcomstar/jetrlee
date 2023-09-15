import { HStack, Icon, Link } from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import useSocials from "../hooks/useSocials";
import { IconType } from "react-icons";

const SocialsIcons = () => {
  const { data } = useSocials();

  const iconMap: { [key: string]: IconType } = {
    github: FaGithub,
    linkedin: FaLinkedin,
    email: FaEnvelope,
    facebook: FaFacebook,
    twitter: FaTwitter,
    youtube: FaYoutube,
  };

  return (
    <HStack justifyContent="center">
      {data.map((social) => (
        <Link href={social.url} isExternal key={social.slug}>
          <Icon as={iconMap[social.slug]} boxSize={"60px"} color={"gray.500"} />
        </Link>
      ))}
    </HStack>
  );
};

export default SocialsIcons;

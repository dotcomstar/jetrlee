import { Icon, Link } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";
import Social from "../entities/Social";

interface URLButtonProps {
  social?: Social;
  color?: string;
  boxSize?: string;
  isDoc?: boolean;
  url?: string;
}

const URLButton = ({ social, boxSize, color, isDoc, url }: URLButtonProps) => {
  const iconMap: { [key: string]: IconType } = {
    github: FaGithub,
    linkedin: FaLinkedin,
    email: FaEnvelope,
    facebook: FaFacebook,
    twitter: FaTwitter,
    youtube: FaYoutube,
    any: FaGlobe,
  };

  let iconSlug = "any";
  if (isDoc) {
    iconSlug = "github";
  } else if (social) {
    iconSlug = social.slug;
  }
  const icon = iconMap[iconSlug];

  return (
    <Link
      href={url ? url : social?.url}
      isExternal
      target="_blank"
      rel="noopener"
      key={social?.slug}
    >
      <Icon as={icon} boxSize={boxSize} color={color} />
    </Link>
  );
};

export default URLButton;

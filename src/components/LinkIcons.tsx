import { HStack, Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaGlobe } from "react-icons/fa";

interface LinkIconProps {
  docs?: string;
  url?: string;
  size?: string;
}

const LinkIcons = ({ docs, url, size = "30px" }: LinkIconProps) => {
  return (
    <HStack>
      {docs && (
        <Link href={docs} key={docs} isExternal target="_blank" rel="noopener">
          <Icon as={FaGithub} boxSize={size} color={"black.500"} />
        </Link>
      )}
      {url && (
        <Link
          isExternal
          href={url}
          key={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon as={FaGlobe} boxSize={size} color={"black.500"} />
        </Link>
      )}
    </HStack>
  );
};

export default LinkIcons;

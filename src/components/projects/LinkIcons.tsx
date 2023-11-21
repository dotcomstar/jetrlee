import { HStack } from "@chakra-ui/react";
import URLButton from "../URLButton";

interface LinkIconProps {
  docs?: string;
  url?: string;
  size?: string;
}

const LinkIcons = ({ docs, url, size = "30px" }: LinkIconProps) => {
  return (
    <HStack>
      {docs && (
        <URLButton
          url={docs}
          isDoc
          boxSize={size}
          color="black.500"
          key={docs}
        />
      )}
      {url && (
        <URLButton url={url} boxSize={size} color="black.500" key={url} />
      )}
    </HStack>
  );
};

export default LinkIcons;

import { HStack } from "@chakra-ui/react";
import socials from "../data/socials";
import Social from "../entities/Social";
import useData from "../hooks/useData";
import URLButton from "./URLButton";

const SocialsIcons = () => {
  const { data } = useData<Social>(socials);

  return (
    <HStack justifyContent="center">
      {data.map((social) => (
        <URLButton social={social} boxSize="60px" color="gray.500" />
      ))}
    </HStack>
  );
};

export default SocialsIcons;

import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaFighterJet } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

export const navBarHeight = "60px";

const NavBar = () => {
  return (
    <Flex
      as="header"
      position="fixed"
      backgroundColor="rgba(100, 
 100, 255, 0.1)"
      backdropFilter="blur(2px)"
      w="100%"
      zIndex="200"
      justifyContent="center"
      height={navBarHeight}
    >
      <HStack justifyContent="space-around" width="50%">
        <Link to="/">
          <Icon
            as={FaFighterJet}
            maxWidth="none"
            boxSize="40px"
            objectFit="fill"
            verticalAlign="middle"
          />
        </Link>
        <HashLink to="/#projects">
          <Text>Projects</Text>
        </HashLink>
        <Link to="/playlists">
          <Text>Playlists</Text>
        </Link>
        <ColorModeSwitch />
      </HStack>
    </Flex>
  );
};

export default NavBar;

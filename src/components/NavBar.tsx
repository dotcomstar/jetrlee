import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaFighterJet } from "react-icons/fa";

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
      <HStack>
        <Link to="/">
          <Icon
            as={FaFighterJet}
            maxWidth="none"
            boxSize="40px"
            objectFit="fill"
            verticalAlign="middle"
          />
        </Link>
        <Link to="/projects">
          <Text>Projects</Text>
        </Link>
        <Link to="/playlists">
          <Text>Playlists</Text>
        </Link>
        <ColorModeSwitch />
      </HStack>
    </Flex>
  );
};

export default NavBar;

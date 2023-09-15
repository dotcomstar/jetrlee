import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

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
    >
      <HStack>
        <Link to="/">
          <Image maxWidth="none" src={logo} boxSize="60px" objectFit="fill" />
        </Link>
        <Link to="/projects">
          <Text>Projects</Text>
        </Link>
        <ColorModeSwitch />
      </HStack>
    </Flex>
  );
};

export default NavBar;

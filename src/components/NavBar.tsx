import { Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <Flex
      as="header"
      position="fixed"
      backgroundColor="rgba(255, 
 255, 255, 0.8)"
      backdropFilter="saturate(180%) blur(10px)"
      w="100%"
      zIndex="200"
      justifyContent="center"
    >
      <Link to="/">
        <Image maxWidth="none" src={logo} boxSize="60px" objectFit="fill" />
      </Link>
      <Link to="/projects">
        <Text>Projects</Text>
      </Link>
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;

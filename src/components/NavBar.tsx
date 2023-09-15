import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack p={{ base: "8px", md: "12px" }} pb={0}>
      <Link to="/">
        <Image maxWidth="none" src={logo} boxSize="60px" objectFit="fill" />
      </Link>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

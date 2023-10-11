import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaFighterJet } from "react-icons/fa";
import { NavHashLink } from "react-router-hash-link";

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
        <NavHashLink
          to="/#top"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "",
            };
          }}
        >
          <Icon
            as={FaFighterJet}
            maxWidth="none"
            boxSize="40px"
            objectFit="fill"
            verticalAlign="middle"
          />
        </NavHashLink>
        <NavHashLink
          to="/#projects"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "",
            };
          }}
        >
          <Text>Projects</Text>
        </NavHashLink>
        <NavLink
          to="/playlists"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "",
            };
          }}
        >
          <Text>Playlists</Text>
        </NavLink>
        <ColorModeSwitch />
      </HStack>
    </Flex>
  );
};

export default NavBar;

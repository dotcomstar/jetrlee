import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaFighterJet } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

export const navBarHeight = "60px";

const NavBar = () => {
  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset });
  };

  return (
    <Flex
      as="header"
      position="fixed"
      backgroundColor="rgba(100, 
 100, 255, 0.1)"
      backdropFilter="blur(10px)"
      w="100%"
      zIndex="200"
      justifyContent="center"
      height={navBarHeight}
    >
      <HStack justifyContent="space-around" width="50%">
        <HashLink to="/#top" reloadDocument>
          <Icon
            as={FaFighterJet}
            maxWidth="none"
            boxSize="40px"
            objectFit="fill"
            verticalAlign="middle"
          />
        </HashLink>
        <HashLink to="/#projects" scroll={scrollWithOffset}>
          <Text>Projects</Text>
        </HashLink>
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

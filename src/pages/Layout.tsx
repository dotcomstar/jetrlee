import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBar, { navBarHeight } from "../components/NavBar";
import SocialsIcons from "../components/SocialsIcons";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box py={{ base: navBarHeight }} as="main">
        <Outlet />
      </Box>
      <SocialsIcons />
    </>
  );
};

export default Layout;

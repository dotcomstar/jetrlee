import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBar, { navBarHeight } from "../components/NavBar";
import SocialsIcons from "../components/SocialsIcons";

interface LayoutProps {
  outlet?: any;
}

const Layout = ({ outlet }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <Box py={{ base: navBarHeight }} as="main">
        {outlet ? outlet : <Outlet />}
      </Box>
      <SocialsIcons />
    </>
  );
};

export default Layout;

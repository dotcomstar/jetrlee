import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBar, { navBarHeight } from "../components/navbar/NavBar";
import SocialsIcons from "../components/SocialsIcons";

interface LayoutProps {
  outlet?: any;
}

const Layout = ({ outlet }: LayoutProps) => {
  return (
    <div id="top">
      <NavBar />
      <Box height={navBarHeight} bgColor={"#acc8ef"}></Box>
      <Box as="main">{outlet ? outlet : <Outlet />}</Box>
      <SocialsIcons />
    </div>
  );
};

export default Layout;

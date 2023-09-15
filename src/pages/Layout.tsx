import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box px={{ base: 3, md: 5 }} py={{ base: "60px" }} as="main">
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;

import { Box, Button, Heading, Text } from "@chakra-ui/react";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { MdHome } from "react-icons/md";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box px={{ base: 3, md: 5 }} py={{ base: "60px" }} as="body">
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occurred."}
        </Text>
        <Button leftIcon={<MdHome />} onClick={() => navigate("/")}>
          Return home
        </Button>
      </Box>
    </>
  );
};

export default ErrorPage;

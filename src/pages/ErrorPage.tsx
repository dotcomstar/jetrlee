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

  let errorMessage: string;
  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <>
      <NavBar />
      <Box px={{ base: 3, md: 5 }} py={{ base: "60px" }} as="main">
        <Heading>Oops...</Heading>
        <Text>{errorMessage}</Text>
        <Button leftIcon={<MdHome />} onClick={() => navigate("/")}>
          Return home
        </Button>
      </Box>
    </>
  );
};

export default ErrorPage;

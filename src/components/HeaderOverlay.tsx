import { Box, Center, Container, useMediaQuery } from "@chakra-ui/react";
import jetPlanefield from "../assets/jet-planefield.jpg";
import CloudTextDynamic from "./CloudTextDynamic";

const HeaderOverlay = () => {
  // single media query with no options
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Container maxW="100vw" p={0}>
      <Box
        minHeight="800px"
        position="relative"
        bgImage={jetPlanefield}
        bgSize="cover"
        bgPosition="bottom right"
        bgRepeat="no-repeat"
        left={0}
        right={0}
      >
        <Center
          position="absolute"
          zIndex={1}
          display="flex"
          justifyContent="top left"
          minH={80}
          pl={3}
          mt={isLargerThan800 ? "10vh" : "-10"}
        >
          <CloudTextDynamic />
        </Center>
      </Box>
    </Container>
  );
};

export default HeaderOverlay;

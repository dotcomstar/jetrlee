import { Box, Center, Container } from "@chakra-ui/react";
import jetPlanefield from "../assets/jet-planefield.jpg";
import CloudTextDynamic from "./CloudTextDynamic";

const HeaderOverlay = () => {
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
          textAlign="left"
          display="flex"
          justifyContent="top left"
          minH={80}
          pl={10}
        >
          <CloudTextDynamic />
        </Center>
      </Box>
    </Container>
  );
};

export default HeaderOverlay;

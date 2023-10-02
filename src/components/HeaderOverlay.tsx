import { Box, Center, Container } from "@chakra-ui/react";
import jetPlanefield from "../assets/jet-planefield.jpg";
import CloudText from "./CloudText";

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
        <Box
          position="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          opacity={0.5}
          bgBlendMode="multiply"
        />
        <Center
          position="relative"
          zIndex={1}
          textAlign="left"
          display="flex"
          justifyContent="left"
          minH={80}
          opacity={1}
        >
          <CloudText />
        </Center>
      </Box>
    </Container>
  );
};

export default HeaderOverlay;

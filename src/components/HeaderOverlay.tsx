import { Box, Center, Container } from "@chakra-ui/react";
import jetPlanefield from "../assets/jet-planefield.jpg";
import CloudText from "./CloudText";
import CloudTextDynamic from "./CloudTextDynamic";
import CloudText2 from "./CloudText2";

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
          position="relative"
          zIndex={1}
          textAlign="left"
          display="flex"
          justifyContent="left"
          minH={80}
          px={10}
          py={10}
        >
          {/* <CloudTextDynamic /> */}
          <CloudText2 />
          {/* <CloudText /> */}
        </Center>
      </Box>
    </Container>
  );
};

export default HeaderOverlay;

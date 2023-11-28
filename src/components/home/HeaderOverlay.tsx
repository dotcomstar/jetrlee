import { Box, Center, Container, useMediaQuery } from "@chakra-ui/react";
import CloudTextDynamic from "./CloudTextDynamic";
import {
  BACKGROUND_IMAGE,
  BACKGROUND_IMAGE_POSITION,
} from "../../constants/settings";

const HeaderOverlay = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isLargerThan1500] = useMediaQuery("(min-width: 1500px)");

  return (
    <Container maxW="100vw" p={0}>
      <Box
        minHeight="800px"
        position="relative"
        bgImage={BACKGROUND_IMAGE}
        backgroundColor="rgba(23, 
          50, 87, 0.4)"
        bgSize="cover"
        bgPosition={BACKGROUND_IMAGE_POSITION}
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
          {!isLargerThan1500 && <CloudTextDynamic />}
        </Center>
      </Box>
    </Container>
  );
};

export default HeaderOverlay;

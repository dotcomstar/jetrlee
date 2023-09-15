import { Box, Center, Container, Text } from "@chakra-ui/react";
import jetPlanefield from "../assets/jet-planefield.jpg";

const HeaderOverlay = () => {
  return (
    <Container maxW={"-moz-max-content"} p={0}>
      <Box
        position="relative"
        bgImage={jetPlanefield}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        left={0}
        right={0}
        maxWidth="100%"
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
          <Text
            as="i"
            fontSize={{ base: "1xl", md: "2xl" }}
            color="whiteAlpha.900"
          >
            Hey, I'm
          </Text>
          <br />
          <Text
            as="b"
            fontSize={{ base: "3xl", md: "6xl" }}
            color="whiteAlpha.900"
          >
            Jet Lee
          </Text>
        </Center>
      </Box>
    </Container>
  );
};

export default HeaderOverlay;

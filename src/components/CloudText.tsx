import { Box, Center, Text } from "@chakra-ui/react";
import jetPlanefield from "../assets/jet-planefield.jpg";

const CloudText = () => {
  return (
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
        opacity={1}
      >
        <svg width="10" height="0">
          <filter id="filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".05"
              numOctaves="4"
            />
            <feDisplacementMap in="SourceGraphic" scale="30" />
          </filter>
          {/* <!-- Back Layer --> */}
          <filter id="filter-back">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="4"
            />
            <feDisplacementMap in="SourceGraphic" scale="30" />
          </filter>
          {/* <!-- Middle Layer --> */}
          <filter id="filter-mid">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012"
              numOctaves="2"
            />
            <feDisplacementMap in="SourceGraphic" scale="20" />
          </filter>
          {/* <!-- Front Layer --> */}
          <filter id="filter-front">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012"
              numOctaves="2"
            />
            <feDisplacementMap in="SourceGraphic" scale="10" />
          </filter>
        </svg>
        <Text
          as="b"
          fontSize={{ base: "4xl", md: "9xl" }}
          color="whiteAlpha.900"
          textShadow="20px 200px 5px #fff"
          position="absolute"
          filter="url(#filter-back)"
        >
          Jet Lee
        </Text>
        <Text
          as="b"
          fontSize={{ base: "4xl", md: "9xl" }}
          color="whiteAlpha.900"
          textShadow="20px 210px 5px rgba(158, 168, 179, 0.5)"
          position="absolute"
          filter="url(#filter-middle)"
        >
          Jet Lee
        </Text>
        <Text
          as="b"
          fontSize={{ base: "4xl", md: "9xl" }}
          color="whiteAlpha.900"
          textShadow="20px 220px 5px rgba(0, 0, 0, 0.3)"
          position="absolute"
          filter="url(#filter-front)"
        >
          Jet Lee
        </Text>
      </Center>
    </Box>
  );
};

export default CloudText;

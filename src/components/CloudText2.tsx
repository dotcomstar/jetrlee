import { Box, Center, Text } from "@chakra-ui/react";
import jetPlanefield from "../assets/jet-planefield.jpg";

const CloudText2 = () => {
  const gaussianStdDev = 0;
  const displacementScale = "30";
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
        {/* Clouds are based on CodePen from https://codepen.io/ccprog/pen/EBPOEQ*/}
        <svg xmlns="http://www.w3.org/2000/svg">
          <filter
            id="filter"
            filterUnits="userSpaceOnUse"
            height="500"
            width="900"
            // y="0"
            // x="0"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="5"
              result="noise1"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="6"
              result="noise2"
            />
            <feGaussianBlur in="SourceGraphic" stdDeviation={gaussianStdDev} />
            <feDisplacementMap
              in="blur1"
              scale={displacementScale}
              in2="noise1"
              result="cloud1"
            />
            <feFlood floodColor="rgb(215,215,215)" floodOpacity="0.3" />
            <feComposite operator="in" in2="SourceGraphic" />
            <feOffset dx="-2" dy="0" />
            <feMorphology radius="20" />
            <feGaussianBlur stdDeviation={gaussianStdDev} />
            <feDisplacementMap
              scale={displacementScale}
              in2="noise1"
              result="cloud2"
            />
            <feFlood floodColor="rgb(66,105,146)" floodOpacity="1" />
            <feComposite operator="in" in2="SourceGraphic" />
            <feOffset dx="-1" dy="6" />
            <feMorphology radius="0 40" />
            <feGaussianBlur stdDeviation={gaussianStdDev} />
            <feDisplacementMap
              scale={displacementScale}
              in2="noise2"
              result="cloud3"
            />
            <feFlood floodColor="rgb(0,0,0)" floodOpacity="1" />
            <feComposite operator="in" in2="SourceGraphic" />
            <feOffset dx="3" dy="13" />
            <feMorphology radius="0 65" />
            <feGaussianBlur stdDeviation={gaussianStdDev} />
            <feDisplacementMap
              scale={displacementScale}
              in2="noise2"
              result="cloud4"
            />
            <feMerge>
              <feMergeNode in="cloud1" id="feMergeNode954" />
              <feMergeNode in="cloud2" id="feMergeNode956" />
              <feMergeNode in="cloud3" id="feMergeNode958" />
              <feMergeNode in="cloud4" id="feMergeNode960" />
            </feMerge>
          </filter>
          <ellipse cx="500" cy="290" rx="340" ry="90" className="cloud" />
        </svg>
        <Text
          as="b"
          fontSize={{ base: "4xl", md: "9xl" }}
          color="whiteAlpha.900"
          textShadow="20px 200px 4px #fff"
          position="absolute"
          filter="url(#filter)"
        >
          Jet Lee
        </Text>
      </Center>
    </Box>
  );
};

export default CloudText2;

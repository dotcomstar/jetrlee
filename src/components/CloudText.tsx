import { Text, useMediaQuery } from "@chakra-ui/react";

const CloudText = () => {
  const gaussianStdDev = 0;
  const displacementScale = "30";
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <>
      {/* Clouds are based on CodePen from https://codepen.io/ccprog/pen/EBPOEQ*/}
      <svg xmlns="http://www.w3.org/2000/svg">
        <filter
          id="filter"
          filterUnits="userSpaceOnUse"
          height="500"
          width="900"
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
          <feFlood floodColor="rgb(66,105,146)" floodOpacity="0.2" />
          <feComposite operator="in" in2="SourceGraphic" />
          <feOffset dx="5" dy="10" />
          <feMorphology radius="5 10 " />
          <feGaussianBlur stdDeviation={gaussianStdDev} />
          <feDisplacementMap
            scale={displacementScale}
            in2="noise2"
            result="cloud3"
          />
          <feFlood floodColor="rgb(0,0,0)" floodOpacity="0.2" />
          <feComposite operator="in" in2="SourceGraphic" />
          <feOffset dx="5" dy="10" />
          <feMorphology radius="9 15" />
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
      </svg>
      <svg height="600" width="3000">
        <text
          x="0"
          y="100"
          // filter="url(#filter)"
          fontSize={"8rem"}
          className="pen"
          fill="none"
          stroke="#ffffff"
          strokeWidth="20"
          strokeLinecap="round"
          // strokeDasharray="206 206"
          // strokeDashoffset="206"
          style={{ lineHeight: 1.2 }}
        >
          Jet Lee
        </text>
      </svg>
      <Text
        as="b"
        userSelect="none"
        fontSize={"8rem"}
        color="rgba(0,0,0,0)"
        textShadow="0px 0px 5px #fff"
        position="absolute"
        filter="url(#filter)"
        lineHeight={1.2}
        className="cloudText"
      >
        {isLargerThan800 ? "Hey, I'm" : ""}
        {isLargerThan800 ? <br /> : null}
        Jet Lee
      </Text>
    </>
  );
};

export default CloudText;

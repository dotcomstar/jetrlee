import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import "./style.css";

const CloudText2 = () => {
  const gaussianStdDev = 3;
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
      <svg
        stroke="#fff"
        fontSize="4rem"
        strokeWidth="10"
        fill="transparent"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        className="text-line"
        filter="url(#filter)"
      >
        <text x="10" y="80">
          Hey I'm
          {"JetLee".split("").map((c, i) => (
            <tspan x={10 + 50 * i} y="140" style={{ animationDelay: `${i}s` }}>
              {c}
            </tspan>
          ))}
        </text>
      </svg>
    </>
  );
};

export default CloudText2;
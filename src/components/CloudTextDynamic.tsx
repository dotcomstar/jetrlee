import { motion } from "framer-motion";
import { useMediaQuery } from "@chakra-ui/react";
import "./style.css";

const CloudTextDynamic = () => {
  const gaussianStdDev = 3;
  const displacementScale = "30";
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  const shouldGenerateLee = isLargerThan500;
  const j_path =
    "M200 200C190 200 146 23 245 4 344-15 198 461 47 452-31 410 107 231 269 248 267 266 268 247 268 247 267 254 267 248 267 248";
  const el_path =
    "M287 248C287 248 393 210 372 159 351 108 237 254 293 293 349 332 390 265 388 270 386 275 425 230 456 155 487 80 465 76 465 76 465 76 369 399 490 277";
  const lee_path =
    "M890 77C890 77 956-50 864-41 772-32 804 342 654 327 504 312 633 225 754 293 875 361 906 286 880 318 854 350 923 267 923 267 923 267 1053 216 1005 169 957 122 873 294 947 321 1021 348 1025 252 1027 285 1029 318 1057 266 1057 266 1057 266 1199 201 1140 167 1081 133 1022 319 1102 322 1182 325 1172 253 1164 285";
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const paths = [
    {
      id: 1,
      path: j_path,
      transition: { duration: 0.5, ease: "easeIn", delay: 0 },
    },
    {
      id: 2,
      path: el_path,
      transition: { duration: 1, ease: "linear", delay: 0.5 },
    },
    {
      id: 3,
      path: lee_path,
      transition: { duration: 2, ease: "easeOut", delay: 2.2 },
    },
  ];

  // Don't render clouds on iOS because the SVG effect doesn't apply.
  if (iOS) {
    return null;
  }

  return (
    <>
      {/* Clouds are based on CodePen from https://codepen.io/ccprog/pen/EBPOEQ*/}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={shouldGenerateLee ? "0 -50 1200 500" : "0 0 500 500"}
      >
        <filter
          id="filter"
          filterUnits="userSpaceOnUse"
          x="0"
          y="0"
          height="800"
          width="1200"
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
      <div
        style={{
          position: "absolute",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          filter="url(#filter)"
          viewBox={shouldGenerateLee ? "0 -100 1200 600" : "0 0 500 500"}
          // width="60vw"
          width="60vw"
          // height="200px"
        >
          {paths.map(
            (p) =>
              (shouldGenerateLee || p.id !== 3) && (
                <motion.path
                  key={p.id}
                  d={p.path}
                  fill="none"
                  strokeWidth="23"
                  stroke="#fff"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={p.transition}
                />
              )
          )}
        </svg>
      </div>
    </>
  );
};

export default CloudTextDynamic;

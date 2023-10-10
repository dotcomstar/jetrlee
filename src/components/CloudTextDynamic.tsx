import { motion } from "framer-motion";
import "./style.css";

const CloudTextDynamic = () => {
  const gaussianStdDev = 3;
  const displacementScale = "30";
  const j_path =
    "M200 200C190 200 146 23 245 4 344-15 198 461 47 452-31 410 107 231 269 248 267 266 268 247 268 247 267 254 267 248 267 248";
  const el_path =
    "M20 180C20 180 126 142 105 91 84 40-30 186 26 225 82 264 123 197 121 202 119 207 158 162 189 87 220 12 198 8 198 8 198 8 102 331 223 209";
  const lee_path =
    "M320 140C320 140 386 13 294 22 202 31 234 405 84 390-66 375 63 288 184 356 305 424 336 349 310 381 284 413 353 330 353 330 353 330 483 279 435 232 387 185 303 357 377 384 451 411 455 315 457 348 459 381 487 329 487 329 487 329 629 264 570 230 511 196 452 382 532 385 612 388 602 316 594 348";

  const paths = [
    {
      path: j_path,
      transition: { duration: 0.5, ease: "easeInOut", delay: 0 },
    },
    {
      path: el_path,
      transition: { duration: 1, ease: "easeInOut", delay: 0.5 },
    },
    {
      path: lee_path,
      transition: { duration: 2, ease: "easeInOut", delay: 1.5 },
    },
  ];

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
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          filter="url(#filter)"
          width="800"
          height="400"
        >
          {paths.map((p) => (
            <motion.path
              key={p.path}
              d={p.path}
              fill="none"
              strokeWidth="23"
              stroke="#fff"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={p.transition}
            />
          ))}
        </svg>
      </div>
    </>
  );
};

export default CloudTextDynamic;

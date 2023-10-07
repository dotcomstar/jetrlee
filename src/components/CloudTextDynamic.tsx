import { Box, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./style.css";

const CloudTextDynamic = () => {
  const gaussianStdDev = 3;
  const displacementScale = "30";
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const transition = { duration: 4, ease: "easeInOut" };

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
          <motion.path
            d="M208.96861267089844,252.0179443359375C196.71151224772134,233.93124643961588,137.07025655110678,166.81614430745444,135.42601013183594,143.4977569580078C133.7817637125651,120.1793696085612,180.56800842285156,114.2002944946289,199.10313415527344,112.10762023925781C217.6382598876953,110.01494598388672,245.14199574788412,111.80867767333984,246.6367645263672,130.94171142578125C248.13153330485025,150.07474517822266,226.00896453857422,197.90731811523438,208.07174682617188,226.90582275390625C190.13452911376953,255.90432739257812,156.50224685668945,298.3557586669922,139.01345825195312,304.9327392578125C121.5246696472168,311.5097198486328,107.62332153320312,275.1868387858073,103.1390151977539,266.3677062988281C98.65470886230469,257.54857381184894,100.4484265645345,256.2032953898112,112.10762023925781,252.0179443359375C123.76681391398112,247.8325932820638,149.32735951741537,246.93571980794272,173.09417724609375,241.25559997558594C196.86099497477213,235.57548014322916,231.24066670735678,222.57100677490234,254.70852661132812,217.93722534179688C278.1763865152995,213.3034439086914,295.51568603515625,214.34977213541666,313.9013366699219,213.45291137695312C332.2869873046875,212.5560506184896,354.7085266113281,216.59193420410156,365.0224304199219,212.55606079101562C375.3363342285156,208.5201873779297,379.8206329345703,194.61883799235025,375.7847595214844,189.2376708984375C371.74888610839844,183.85650380452475,354.7085367838542,181.46487426757812,340.80718994140625,180.26905822753906C326.9058430989583,179.0732421875,300,174.28998057047525,292.3766784667969,182.06277465820312C284.75335693359375,189.835568745931,293.1240590413411,216.44244384765625,295.0672607421875,226.90582275390625C297.0104624430339,237.36920166015625,293.572509765625,241.85351053873697,304.035888671875,244.84304809570312C314.499267578125,247.83258565266928,338.5650278727214,252.01793670654297,357.8475341796875,244.84304809570312C377.1300404866536,237.66815948486328,400.8968454996745,218.23616790771484,419.7309265136719,201.79371643066406C438.56500752766925,185.35126495361328,465.4708506266276,146.78624471028647,470.8520202636719,146.18833923339844C476.2331899007161,145.5904337565104,452.16741943359375,179.97011057535806,452.0179443359375,198.20628356933594C451.86846923828125,216.4424565633138,464.4245300292969,256.0538075764974,469.9551696777344,255.60537719726562C475.4858093261719,255.15694681803384,494.6188252766927,210.164431254069,485.2017822265625,195.5157012939453C475.7847391764323,180.86697133382162,407.4738362630208,172.7952117919922,413.4529113769531,167.71299743652344C419.43198649088544,162.6307830810547,499.10313415527344,168.46038055419922,521.0762329101562,165.0224151611328C543.0493316650391,161.5844497680664,541.255625406901,150.07474009195963,545.29150390625,147.085205078125"
            fill="none"
            strokeWidth="20"
            stroke="#fff"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
        </svg>
      </div>
    </>
  );
};

export default CloudTextDynamic;

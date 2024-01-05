import Project from "../entities/Project";

const projects: Project[] = [
  {
    name: "Triviale",
    description:
      "A wordle-like game for trivia questions. Answer 3 new questions every day!",
    shortDescription: "A daily trivia puzzle game",
    image: "/Triviale.png",
    slug: "triviale",
    url: "https://www.triviale.net/",
    docs: "https://github.com/dotcomstar/Triviale",
    startDate: "2023",
    endDate: "2024",
    isCurrent: true,
    skills: ["react", "typescript"],
  },
  {
    name: "ScheduleTerp Website",
    description:
      "A website to auto-generate the best course schedule for UMD students. Just input your courses and click generate!",
    shortDescription: "Find the best schedule for UMD Courses",
    image: "/ScheduleTerpWebsite.png",
    slug: "scheduleterp",
    url: "https://scheduleterp.vercel.app/",
    docs: "https://github.com/dotcomstar/ScheduleTerpFrontend",
    startDate: "2023",
    endDate: "2023",
    isCurrent: false,
    skills: ["react", "typescript", "aws", "python"],
  },
  {
    name: "GameHub Website",
    description: "A website to find new games to play!",
    shortDescription: "Find new games to play!",
    image: "/GameHubWebsite.png",
    slug: "gamehub",
    url: "https://game-hub-brown.vercel.app/",
    docs: "https://github.com/dotcomstar/game-hub",
    startDate: "2023",
    endDate: "2023",
    isCurrent: false,
    skills: ["react", "typescript"],
  },
  {
    name: "Formula E Dashboard",
    description:
      "Designed and built a functional dashboard for UMD's Formula E racecar team.",
    shortDescription: "Dashboard for UMD's Formula E racecar team",
    image: "/FEDashboard.png",
    slug: "fedashboard",
    startDate: "2022",
    endDate: "2022",
    isCurrent: false,
    skills: ["soldering"],
  },
  {
    name: "Botball Robotics",
    description:
      "A fully-autonomous robotics tournament for high-school students. Watch us place top 10 at the Global GCER tournament!",
    shortDescription:
      "Placed 10th globally at a fully-autonomous high school robotics competition",
    image: "https://img.youtube.com/vi/ZzfZ50dQAYE/sddefault.jpg",
    slug: "botball",
    url: "https://www.youtube.com/playlist?list=PLFBMxG1YHu_eViSOG3yIg4HtCXumexXUV",
    docs: "https://github.com/rockvillerobotics/Incredibots2018",
    startDate: "2015",
    endDate: "2018",
    isCurrent: false,
    skills: ["python"],
  },
  {
    name: "CS:GO Defuse CodePen",
    description:
      'A quick CodePen project. Hold E to defuse the "spike", just like in the hit game CS:GO.',
    shortDescription: "Defuse just like in CS:GO!",
    image: "/CS_Codepen.png",
    slug: "cscodepen",
    url: "https://codepen.io/Dotcomstar/pen/PodzVOa",
    startDate: "2023",
    endDate: "2023",
    isCurrent: false,
    skills: ["javascript"],
  },
];

export default projects;

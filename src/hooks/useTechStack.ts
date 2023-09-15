import techStack from "../data/techStack";

export interface Technology {
  category: "software" | "hardware" | "language";
  type?: string;
  title: string;
  slug: string;
  proficiency: "learning" | "proficient";
}

const useTechStack = () => ({
  data: techStack,
});

export default useTechStack;

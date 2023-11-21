export type SkillName =
  | "python"
  | "typescript"
  | "react"
  | "aws"
  | "soldering"
  | "spanish";

export default interface Skill {
  category?: "software" | "hardware" | "language";
  type?: string;
  title: string;
  slug: SkillName;
  proficiency?: "learning" | "proficient";
}

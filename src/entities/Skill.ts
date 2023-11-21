export default interface Skill {
  category: "software" | "hardware" | "language";
  type?: string;
  title: string;
  slug: string;
  proficiency: "learning" | "proficient";
}

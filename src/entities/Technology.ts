export default interface Technology {
  category: "software" | "hardware" | "language";
  type?: string;
  title: string;
  slug: string;
  proficiency: "learning" | "proficient";
}

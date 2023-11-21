import { SkillName } from "./Skill";

export default interface Project {
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  slug: string;
  url?: string;
  docs?: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  skills?: SkillName[];
}

import projects from "../data/projects";

export interface Project {
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  slug: string;
  url: string;
  startDate: string;
  endDate: string;
  isCurrent: string;
}
const useProjects = () => ({
  data: projects,
});

export default useProjects;

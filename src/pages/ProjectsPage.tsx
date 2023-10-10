import { GridItem, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import Project from "../entities/Project";
import useData from "../hooks/useData";

const ProjectsPage = () => {
  const { data } = useData<Project>(projects);

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      margin={1}
      marginTop={3}
    >
      {data.map((project) => (
        <GridItem key={project.slug}>
          <ProjectCard project={project} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default ProjectsPage;

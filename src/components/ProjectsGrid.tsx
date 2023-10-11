import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import Project from "../entities/Project";
import useData from "../hooks/useData";

const ProjectsGrid = () => {
  const { data } = useData<Project>(projects);

  return (
    <>
      <Heading id="projects">Projects</Heading>
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
    </>
  );
};

export default ProjectsGrid;

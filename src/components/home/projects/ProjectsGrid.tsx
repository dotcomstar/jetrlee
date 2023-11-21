import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import projects from "../../../data/projects";
import Project from "../../../entities/Project";
import useData from "../../../hooks/useData";
import ProjectCard from "./ProjectCard";
import useFilterStore from "../../../stores/filterStore";

const ProjectsGrid = () => {
  const { data } = useData<Project>(projects);
  const currParams = useFilterStore((s) => s.currParams);

  return (
    <>
      <Heading id="projects" marginBottom={3}>
        Projects
      </Heading>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        margin={1}
      >
        {data.map(
          (project) =>
            (currParams.length === 0 ||
              project.skills?.reduce(
                (acc, state) => acc || currParams.includes(state),
                false
              )) && (
              <GridItem key={project.slug}>
                <ProjectCard project={project} />
              </GridItem>
            )
        )}
      </SimpleGrid>
    </>
  );
};

export default ProjectsGrid;

import { GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import projects from "../../../data/projects";
import Project from "../../../entities/Project";
import useData from "../../../hooks/useData";
import ProjectCard from "./ProjectCard";
import useFilterStore from "../../../stores/filterStore";

const ProjectsGrid = () => {
  const { data } = useData<Project>(projects);
  const currParams = useFilterStore((s) => s.currParams);

  const hasProjects: boolean =
    data
      .map(
        (project) =>
          currParams.length === 0 ||
          project.skills?.reduce(
            (acc, state) => acc || currParams.includes(state),
            false
          )
      )
      .filter((s) => s == true).length > 0;

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
      {!hasProjects && (
        <Text marginBottom={3} marginTop={-3}>
          Sorry, no projects showcase the selected skills at the moment.
        </Text>
      )}
    </>
  );
};

export default ProjectsGrid;

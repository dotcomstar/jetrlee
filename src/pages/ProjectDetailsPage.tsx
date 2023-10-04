import { SimpleGrid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Project from "../entities/Project";
import projects from "../data/projects";
import useDataPoint from "../hooks/useDataPoint";

const ProjectDetailsPage = () => {
  const { slug } = useParams();
  const project = useDataPoint<Project>(projects, slug!)!;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{project.name}</Heading>
        <Text>{project.description}</Text>
      </GridItem>
      <GridItem>
        <Image src={project.image} objectFit="cover" />
      </GridItem>
    </SimpleGrid>
  );
};

export default ProjectDetailsPage;

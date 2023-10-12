import {
  GridItem,
  HStack,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import projects from "../data/projects";
import Project from "../entities/Project";
import useDataPoint from "../hooks/useDataPoint";
import LinkIcons from "../components/LinkIcons";

const ProjectDetailsPage = () => {
  const { slug } = useParams();
  const project = useDataPoint<Project>(projects, slug!)!;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} px={5} pt={3}>
      <GridItem>
        <HStack justifyContent="left">
          <Heading>{project.name}</Heading>
          <LinkIcons docs={project.docs} url={project.url} />
        </HStack>
        <Text>{project.description}</Text>
      </GridItem>
      <GridItem>
        <Link isExternal href={project.url}>
          <Image src={project.image} objectFit="cover" />
        </Link>
      </GridItem>
    </SimpleGrid>
  );
};

export default ProjectDetailsPage;

import {
  SimpleGrid,
  GridItem,
  Heading,
  Image,
  Text,
  HStack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Project from "../entities/Project";
import projects from "../data/projects";
import useDataPoint from "../hooks/useDataPoint";

const ProjectDetailsPage = () => {
  const { slug } = useParams();
  const project = useDataPoint<Project>(projects, slug!)!;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} px={5} pt={3}>
      <GridItem>
        <HStack justifyContent="left">
          <Heading>{project.name}</Heading>
          {project.docs && (
            <Link
              href={project.docs}
              key={project.docs}
              isExternal
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon as={FaGithub} boxSize={"30px"} color={"black.500"} />
            </Link>
          )}
          {project.url && (
            <Link
              isExternal
              href={project.url}
              key={project.slug}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon as={FaGlobe} boxSize={"30px"} color={"black.500"} />
            </Link>
          )}
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

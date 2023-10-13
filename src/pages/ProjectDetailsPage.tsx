import {
  Center,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaCaretSquareLeft, FaCaretSquareRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import LinkIcons from "../components/LinkIcons";
import projects from "../data/projects";
import Project from "../entities/Project";
import useDataPoint from "../hooks/useDataPoint";
import useIndex from "../hooks/useIndex";
import NavigationButtons from "../components/NavigationButtons";

const ProjectDetailsPage = () => {
  const { slug } = useParams();
  const project = useDataPoint<Project>(projects, slug!)!;
  const index = useIndex<Project>(projects, slug!)!;
  const prev =
    projects[
      (((index - 1) % projects.length) + projects.length) % projects.length
    ];
  const next =
    projects[
      (((index + 1) % projects.length) + projects.length) % projects.length
    ];

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
      <GridItem colSpan={2}>
        <NavigationButtons
          prevSlug={prev.slug}
          prevName={prev.name}
          nextSlug={next.slug}
          nextName={next.name}
        />
      </GridItem>
    </SimpleGrid>
  );
};

export default ProjectDetailsPage;

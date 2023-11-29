import {
  Button,
  Center,
  GridItem,
  HStack,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import LinkIcons from "../components/home/projects/LinkIcons";
import NavigationButton from "../components/home/projects/NavigationButton";
import { PLACEHOLDER_IMAGE } from "../constants/settings";
import projects from "../data/projects";
import skills from "../data/skills";
import Project from "../entities/Project";
import Skill from "../entities/Skill";
import useDataPoint from "../hooks/useDataPoint";
import useIndex from "../hooks/useIndex";
import DefinitionItem from "./DefinitionItem";

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
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} p={8} pb={0}>
        <GridItem>
          <HStack justifyContent="left">
            <Heading>{project.name}</Heading>
            <LinkIcons docs={project.docs} url={project.url} />
          </HStack>
          <Text>{project.description}</Text>
          <DefinitionItem term="Skills">
            <HStack>
              {project.skills?.map((s) => (
                <Button size={"sm"} color="gray.650">
                  {useDataPoint<Skill>(skills, s)?.title}
                </Button>
              ))}
            </HStack>
          </DefinitionItem>
        </GridItem>
        <GridItem>
          <Link isExternal href={project.url}>
            <Image
              src={project.image}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = PLACEHOLDER_IMAGE;
              }}
              alt={project.name}
              objectFit="cover"
            />
            <Button colorScheme="blue" width={"100%"} rounded={"unset"}>
              Visit me!
            </Button>
          </Link>
        </GridItem>
      </SimpleGrid>
      <Center m={5} mx={"10vw"}>
        <HStack
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <NavigationButton
            direction="left"
            slug={prev.slug}
            name={prev.name}
          />
          <NavigationButton
            direction="right"
            slug={next.slug}
            name={next.name}
          />
        </HStack>
      </Center>
    </>
  );
};

export default ProjectDetailsPage;

import {
  GridItem,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
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
      marginTop={2}
    >
      {data.map((project) => (
        <GridItem>
          <LinkBox
            key={project.slug}
            _hover={{
              transform: "scale(1.03)",
              transition: "transform .15s ease-in",
            }}
            borderWidth="1px"
            borderRadius={10}
            p="5"
          >
            <Heading size="md" my="2">
              <LinkOverlay
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </LinkOverlay>
            </Heading>
            <Text>{project.shortDescription}</Text>
            <Image src={project.image} />
          </LinkBox>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default ProjectsPage;

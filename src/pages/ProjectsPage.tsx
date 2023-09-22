import { Heading, LinkBox, LinkOverlay, Text, Image } from "@chakra-ui/react";
import useData from "../hooks/useData";
import projects from "../data/projects";
import Project from "../entities/Project";

const ProjectsPage = () => {
  const { data } = useData<Project>(projects);

  return (
    <>
      {data.map((project) => (
        <LinkBox
          key={project.slug}
          borderWidth="1px"
          rounded="md"
          maxW="sm"
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
      ))}
    </>
  );
};

export default ProjectsPage;

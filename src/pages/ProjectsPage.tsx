import { Heading, LinkBox, LinkOverlay, Text, Image } from "@chakra-ui/react";
import useProjects from "../hooks/useProjects";

const ProjectsPage = () => {
  const { data } = useProjects();

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

import {
  LinkBox,
  Card,
  CardBody,
  Heading,
  LinkOverlay,
  Text,
  Image,
} from "@chakra-ui/react";
import Project from "../entities/Project";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <LinkBox
      key={project.slug}
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      border="1px"
      borderRadius={10}
      as={Card}
      p="5"
    >
      <CardBody>
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
      </CardBody>
    </LinkBox>
  );
};

export default ProjectCard;

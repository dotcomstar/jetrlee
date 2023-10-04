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
      borderRadius={10}
      as={Card}
      overflow="hidden"
    >
      <Image src={project.image} objectFit="cover" />
      <CardBody>
        <Heading size="md" my="2">
          <LinkOverlay href={`/projects/${project.slug}`} />
          {project.name}
        </Heading>
        <Text>{project.shortDescription}</Text>
      </CardBody>
    </LinkBox>
  );
};

export default ProjectCard;

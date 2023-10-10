import {
  LinkBox,
  Card,
  CardBody,
  Heading,
  LinkOverlay,
  Text,
  Image,
  AspectRatio,
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
      <AspectRatio maxW="400px" ratio={16 / 9}>
        <Image src={project.image} alt={project.name} objectFit="cover" />
      </AspectRatio>
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

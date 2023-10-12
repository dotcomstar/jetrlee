import {
  LinkBox,
  Card,
  CardBody,
  Heading,
  LinkOverlay,
  Text,
  Image,
  AspectRatio,
  HStack,
} from "@chakra-ui/react";
import Project from "../entities/Project";
import noImage from "../assets//no-image-placeholder-6f3882e0.webp";
import LinkIcons from "./LinkIcons";

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
        <Image
          src={project.image}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = noImage;
          }}
          alt={project.name}
          objectFit="cover"
        />
      </AspectRatio>
      <CardBody>
        <HStack justifyContent="space-between">
          <Heading size="md" my="2">
            <LinkOverlay href={`/projects/${project.slug}`} />
            {project.name}
          </Heading>
          <LinkIcons docs={project.docs} url={project.url} size="25px" />
        </HStack>
        <Text>{project.shortDescription}</Text>
      </CardBody>
    </LinkBox>
  );
};

export default ProjectCard;

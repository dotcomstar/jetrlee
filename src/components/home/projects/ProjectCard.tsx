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
  Button,
} from "@chakra-ui/react";
import Project from "../../../entities/Project";
import LinkIcons from "./LinkIcons";
import { PLACEHOLDER_IMAGE } from "../../../constants/settings";
import useDataPoint from "../../../hooks/useDataPoint";
import skills from "../../../data/skills";
import Skill from "../../../entities/Skill";

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
            currentTarget.src = PLACEHOLDER_IMAGE;
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
        <HStack marginY={2}>
          {project.skills?.map((s) => (
            <Button colorScheme="gray" size={"sm"}>
              {useDataPoint<Skill>(skills, s)?.title}
            </Button>
          ))}
        </HStack>
      </CardBody>
    </LinkBox>
  );
};

export default ProjectCard;

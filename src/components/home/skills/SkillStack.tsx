import { Button, HStack, Heading } from "@chakra-ui/react";
import Skill from "../../../entities/Skill";
import skills from "../../../data/skills";
import useData from "../../../hooks/useData";

const SkillStack = () => {
  const { data } = useData<Skill>(skills);
  return (
    <>
      <Heading id="Skills" marginBottom={3}>
        Skills
      </Heading>
      <HStack>
        {data.map((s) => (
          <Button>{s.title}</Button>
        ))}
      </HStack>
    </>
  );
};

export default SkillStack;

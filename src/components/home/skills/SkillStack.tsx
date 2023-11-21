import { Button, Heading } from "@chakra-ui/react";
import Skill from "../../../entities/Skill";
import skills from "../../../data/skills";
import useData from "../../../hooks/useData";
import useFilterStore from "../../../stores/filterStore";

const SkillStack = () => {
  const { data } = useData<Skill>(skills);
  const { currParams, addParam, removeParam } = useFilterStore();

  return (
    <>
      <Heading id="Skills" marginBottom={3}>
        Skills
      </Heading>
      {data.map((s) => (
        <Button
          onClick={() =>
            currParams.includes(s.slug) ? removeParam(s.slug) : addParam(s.slug)
          }
          colorScheme={currParams.includes(s.slug) ? "blue" : "gray"}
          marginRight={2}
          marginBottom={1}
        >
          {s.title}
        </Button>
      ))}
    </>
  );
};

export default SkillStack;

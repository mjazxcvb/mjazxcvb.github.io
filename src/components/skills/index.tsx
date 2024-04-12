import React from "react";
import { TSkill } from "../../types";
import { SkillCategory, SkillList, SkillStack } from "./index.styled";

type Props = {
  skills: TSkill;
};

export default function Skill({ skills }: Props) {
  const { category, list } = skills;
  return (
    <SkillStack>
      <SkillCategory>{category}</SkillCategory>
      <SkillList>{list.join(" • ")}</SkillList>
    </SkillStack>
  );
}

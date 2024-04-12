import React from "react";
import {
  ExpContainer,
  ExpContent,
  ExpHeader,
  ExpImage,
  ExpRelated,
} from "./index.styled";
import { TExp } from "../../types";

type Props = {
  exp: TExp;
};

export default function Experience({ exp }: Props) {
  const { images, company, related } = exp;
  return (
    <ExpContainer>
      <ExpImage src={images} />
      <ExpContent>
        <ExpHeader>{company}</ExpHeader>
        <ExpRelated>{related.join(" •  ")}</ExpRelated>
      </ExpContent>
    </ExpContainer>
  );
}

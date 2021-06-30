import React from "react";
import * as S from "./styles";

interface DescriptionTextProps {
  descriptionTitle: string;
  descriptionLink: string;
}

export function DescriptionText({
  descriptionTitle,
  descriptionLink,
}: DescriptionTextProps) {
  return (
    <S.DescriptionWrapper>
      <S.DescriptionTitle>{descriptionTitle}</S.DescriptionTitle>
      <S.DescriptionLink>{descriptionLink}</S.DescriptionLink>
    </S.DescriptionWrapper>
  );
}

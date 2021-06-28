import React from "react";

import * as S from "./styles";

import ReadNow from "../../assets/readNow.png";

interface VolumeInfoProps {
  title: string;
  authors: Array<string>;
  thumbnail: string;
  backgroundColor: string;
}

export function NewBookCard({
  thumbnail,
  title,
  authors,
  backgroundColor,
}: VolumeInfoProps) {
  return (
    <S.Container style={{ backgroundColor: backgroundColor }}>
      <S.Description>
        <S.BookTitle>{title}</S.BookTitle>
        <S.BookAuthor>{authors}</S.BookAuthor>

        <S.ReadNow>
          <S.Icon source={ReadNow} />
          <S.ReadValueNumber>120+</S.ReadValueNumber>
          <S.ReadValue> Read Now</S.ReadValue>
        </S.ReadNow>
      </S.Description>

      <S.BookThumbnail source={{ uri: thumbnail }} />
    </S.Container>
  );
}

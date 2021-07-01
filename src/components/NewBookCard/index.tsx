import React from "react";

import * as S from "./styles";

import ReadNow from "../../assets/readNow.png";
import Oval from "../../assets/Oval.png";
import Rectangle from "../../assets/Rectangle.png";
import Triangle from "../../assets/triangle.png";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();

  return (
    <S.RedirectButton onPress={() => navigation.navigate("Libraries")}>
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

        <S.BookContainer>
          <S.Triangle source={Triangle} />
          <S.Retangle source={Rectangle} />
          <S.Oval source={Oval} />
          <S.BookThumbnail source={{ uri: thumbnail }} />
        </S.BookContainer>
      </S.Container>
    </S.RedirectButton>
  );
}

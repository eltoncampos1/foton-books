import React from "react";
import * as S from "./styles";
import { BorderlessButtonProps } from "react-native-gesture-handler";

interface VolumeInfoProps extends BorderlessButtonProps {
  bookTitle: string;
  bookAuthors: any;
  bookThumbnail: string;
  onPress: () => void;
}

export function SearchedBook({
  bookThumbnail,
  bookTitle,
  bookAuthors,
  ...rest
}: VolumeInfoProps) {
  return (
    <S.Container {...rest}>
      <S.BookThumbnail source={{ uri: bookThumbnail }} />
      <S.BookTitle>{String(bookTitle)}</S.BookTitle>
      <S.BookAuthors> by {bookAuthors}</S.BookAuthors>
    </S.Container>
  );
}

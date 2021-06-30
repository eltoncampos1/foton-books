import React from "react";
import * as S from "./styles";

import BookIcon from "../../assets/bookIcon.png";
import BAckImage from "../../assets/bg-currently.png";

interface CurrentlyReadingprops {
  bookTitle: string;
  bookAuthor: string;
  bookThumbnail: string;
}

export function CurrentlyReading({
  bookTitle,
  bookAuthor,
  bookThumbnail,
}: CurrentlyReadingprops) {
  return (
    <S.Container source={BAckImage}>
      <S.Book source={{ uri: bookThumbnail }} />

      <S.BookDescription>
        <S.BookTitle>{bookTitle}</S.BookTitle>
        <S.BookAuthor>by {bookAuthor}</S.BookAuthor>

        <S.ChapterDescription>
          <S.BookIcon source={BookIcon} />
          <S.Chapter>Chapter </S.Chapter>
          <S.ChapterNumber>2 </S.ChapterNumber>
          <S.ChapterFrom>From 9</S.ChapterFrom>
        </S.ChapterDescription>
      </S.BookDescription>
    </S.Container>
  );
}

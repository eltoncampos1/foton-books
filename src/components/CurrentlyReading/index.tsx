import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButtonProps } from "react-native-gesture-handler";

import BookIcon from "../../assets/bookIcon.png";
import BAckImage from "../../assets/bg-currently.png";

import * as S from "./styles";

interface CurrentlyReadingprops extends BorderlessButtonProps {
  bookTitle: string;
  bookAuthors: any;
  bookThumbnail: string;
  bookSubtitle?: string;
  bookDescription?: string;
  onPress?: () => void;
}

export function CurrentlyReading({
  bookTitle,
  bookAuthors,
  bookThumbnail,
  bookSubtitle,
  bookDescription,
}: CurrentlyReadingprops) {
  const navigation = useNavigation();

  function handleClick() {
    navigation.navigate("Details", {
      bookThumb: bookThumbnail,
      bookName: bookTitle,
      bookSubtitle: bookSubtitle,
      bookAuthors: bookAuthors,
      bookDescription: bookDescription,
    });
  }

  return (
    <S.BookWrapper onPress={handleClick}>
      <S.Container source={BAckImage}>
        <S.Book source={{ uri: bookThumbnail }} />

        <S.BookDescription>
          <S.BookTitle>{bookTitle}</S.BookTitle>
          <S.BookAuthor>by {bookAuthors}</S.BookAuthor>

          <S.ChapterDescription>
            <S.BookIcon source={BookIcon} />
            <S.Chapter>Chapter </S.Chapter>
            <S.ChapterNumber>2 </S.ChapterNumber>
            <S.ChapterFrom>From 9</S.ChapterFrom>
          </S.ChapterDescription>
        </S.BookDescription>
      </S.Container>
    </S.BookWrapper>
  );
}

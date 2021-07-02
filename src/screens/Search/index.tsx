import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import * as Random from "expo-random";

import { Input } from "../../components/Input";
import { SearchedBook } from "../../components/SearchedBooks";
import { useFetchBookByName } from "../../hooks/useFetchBookByName";

import * as S from "./styles";

export function Search({ route }: any) {
  const placeholder =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png";
  const [visible, setVisible] = useState(6);
  const navigation = useNavigation();

  const { InputParam } = route.params;
  const { data, loading } = useFetchBookByName(InputParam);

  const showMoreBooks = () => {
    setVisible((prev) => prev + 3);
  };

  if (!data) {
    return null;
  }
  if (route.params.InputParam === undefined) {
    return null;
  }

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <S.Container showsVerticalScrollIndicator={false}>
      <Input />
      <S.BookContainer>
        {data.slice(0, visible).map((book: any) => (
          <SearchedBook
            onPress={() =>
              navigation.navigate("Details", {
                bookThumb: book.volumeInfo.imageLinks.thumbnail,
                bookName: book.volumeInfo.title,
                bookSubtitle: book.volumeInfo.subtitle,
                bookAuthors: book.volumeInfo.authors,
                bookDescription: book.volumeInfo.description,
              })
            }
            key={String(Random.getRandomBytes(1024))}
            bookTitle={
              book.volumeInfo.title.length > 12
                ? `${String(book.volumeInfo.title).slice(0, 25)}...`
                : book.volumeInfo.title
            }
            bookAuthors={book.volumeInfo.authors}
            bookThumbnail={
              book.volumeInfo.imageLinks?.thumbnail
                ? book.volumeInfo.imageLinks.thumbnail
                : placeholder
            }
          />
        ))}
        <S.LoadMoreButton>
          <S.ButtonText onPress={showMoreBooks}>Load More</S.ButtonText>
        </S.LoadMoreButton>
      </S.BookContainer>
    </S.Container>
  );
}

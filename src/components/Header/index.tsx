import React from "react";
import { ActivityIndicator } from "react-native";
import * as Random from "expo-random";
import { useFetchBookByName } from "../../hooks/useFetchBookByName";
import { NewBookCard } from "../NewBookCard";

import * as S from "./styles";
import { colorArray } from "../../utils/color";
import { DescriptionText } from "../DescriptonText";
import { Input } from "../Input";

import Mask1 from "../../assets/mask1.png";
import Mask2 from "../../assets/mask2.png";

export function Header() {
  const { data, loading } = useFetchBookByName("hooked");

  return (
    <S.Container>
      <Input />
      <S.UserGreetings>
        <S.Greeting>Hi, </S.Greeting>
        <S.UserName>Elton Campos 👋</S.UserName>
      </S.UserGreetings>

      <S.NewBooks>
        <S.Mask1 source={Mask1} />
        <S.Mask2 source={Mask2} />

        <DescriptionText
          descriptionTitle="Discover new book"
          descriptionLink="More"
        />
        <S.NewBooksCards
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          {loading && <ActivityIndicator size="small" />}
          {data.map((book, i) => (
            <NewBookCard
              key={String(Random.getRandomBytes(1024))}
              title={
                String(book.volumeInfo.title).length > 12
                  ? `${String(book.volumeInfo.title).slice(0, 19)}...`
                  : book.volumeInfo.title
              }
              authors={book.volumeInfo.authors}
              thumbnail={book.volumeInfo.imageLinks.thumbnail}
              backgroundColor={String(colorArray[i])}
              subtitle={book.volumeInfo.subtitle}
              description={book.volumeInfo.subtitle}
            ></NewBookCard>
          ))}
        </S.NewBooksCards>
      </S.NewBooks>
    </S.Container>
  );
}

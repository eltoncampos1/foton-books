import React, { useEffect, useState } from "react";
import * as Random from "expo-random";
import api from "../../services/api";
import { NewBookCard } from "../NewBookCard";

import * as S from "./styles";
import { colorArray } from "../../utils/color";

interface VolumeInfoProps {
  title: string;
  authors: Array<string>;
  imageLinks: {
    thumbnail: string;
  };
}

interface BooksCardData {
  volumeInfo: VolumeInfoProps;
}

export function Header() {
  const [data, setData] = useState<BooksCardData[]>([]);

  useEffect(() => {
    api.get("/", { params: { q: "hooked" } }).then((response) => {
      setData(response.data.items);
    });
  }, []);

  return (
    <S.Container>
      <S.UserGreetings>
        <S.Greeting>Hi, </S.Greeting>
        <S.UserName>Elton Campos 👋</S.UserName>
      </S.UserGreetings>

      <S.NewBooks>
        <S.NewBookText>
          <S.NewBookTitle>Discover new book</S.NewBookTitle>
          <S.NewBookMore>more</S.NewBookMore>
        </S.NewBookText>

        <S.NewBooksCards
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          {data.map((book, i) => (
            <NewBookCard
              key={String(Random.getRandomBytes(1024))}
              title={
                String(book.volumeInfo.title).length > 12
                  ? `${String(book.volumeInfo.title).slice(0, 20)}...`
                  : book.volumeInfo.title
              }
              authors={book.volumeInfo.authors}
              thumbnail={book.volumeInfo.imageLinks.thumbnail}
              backgroundColor={String(colorArray[i])}
            ></NewBookCard>
          ))}
        </S.NewBooksCards>
      </S.NewBooks>
    </S.Container>
  );
}

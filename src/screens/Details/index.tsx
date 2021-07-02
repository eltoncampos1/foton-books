import React from "react";

import * as S from "./styles";

import detailbg from "../../assets/bgDetails.png";
import detailmask from "../../assets/detailmask.png";
import detailmask1 from "../../assets/demailmask1.png";
import detailmask2 from "../../assets/detailmask2.png";
import detailmask3 from "../../assets/detailmask3.png";

export function Details({ route }: any) {
  const { bookName, bookSubtitle, bookAuthors, bookDescription, bookThumb } =
    route.params;

  const placeholder =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png";

  if (!route.params.bookThumb) {
    return placeholder;
  }

  return (
    <S.Container>
      <S.TopBackgroundImage source={detailbg}>
        <S.DetailMask source={detailmask} />
        <S.DetailMask1 source={detailmask1} />
        <S.DetailMask2 source={detailmask2} />
        <S.DetailMask3 source={detailmask3} />
        {bookThumb ? (
          <S.BookThumbnail source={{ uri: bookThumb }} />
        ) : (
          <S.BookThumbnail source={{ uri: placeholder }} />
        )}
      </S.TopBackgroundImage>

      <S.TitleContainer>
        <S.BookTitle>{bookName} :</S.BookTitle>
        <S.BookSubTitle>{bookSubtitle}</S.BookSubTitle>
      </S.TitleContainer>
      <S.BookAuthors>{bookAuthors}</S.BookAuthors>
      <S.BookDescription>{bookDescription}</S.BookDescription>
    </S.Container>
  );
}

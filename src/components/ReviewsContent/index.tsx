import React from "react";
import * as S from "./styles";

import ReviewImage from "../../assets/ImageReview.png";

export function ReviewsContent() {
  return (
    <S.Container>
      <S.ReviewImage source={ReviewImage} resizeMode="contain" />

      <S.DescriptionViewContainer>
        <S.BookReviewTitle>Don’t Make Me Think - Steve Krug</S.BookReviewTitle>
        <S.ReviewInfos>
          <S.ReviewPublisher>Jesse Showalter</S.ReviewPublisher>
          <S.ReviewViews>. 5.2K Views </S.ReviewViews>
          <S.ReviewPublishedDate>. 5.2K Views 1 Week ago</S.ReviewPublishedDate>
        </S.ReviewInfos>

        <S.Testimonial>
          "Don't Make Me Think" by Steve Krug is one of the first books I read
          when I was getting into digital design. It helped me move from
          designing things that just "look nice" to designing things that are
          usable, useful, memorable and simple to learn and use.
        </S.Testimonial>
      </S.DescriptionViewContainer>
    </S.Container>
  );
}

import React from "react";
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";

import * as S from "./styles";

export function Home() {
  return (
    <S.Container showsVerticalScrollIndicator={false}>
      <Header />
      <Content />
    </S.Container>
  );
}

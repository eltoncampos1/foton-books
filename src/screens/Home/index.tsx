import React from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <Input />
      <Header />
    </S.Container>
  );
}

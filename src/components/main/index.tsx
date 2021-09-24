import React from "react";
import * as S from "./styles";
import List from "./list/index";

const Main = () => {
    return (
        <S.Wrapper>
            <S.Main>
                <List />
            </S.Main>
        </S.Wrapper>
    )
}

export default Main;
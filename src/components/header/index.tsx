import React from "react";
import * as S from "./styles";
import Grade from "./button/index";

const Header = () => {
    return (
        <S.Wrapper>
            <S.Left>
                <img src="" alt="logo" />
                <Grade title="1"></Grade>
                <Grade title="2"></Grade>
                <Grade title="3"></Grade>
            </S.Left>
            <S.Right>
                <p>※ 제출한 학생은 표시되지 않습니다.</p>
            </S.Right>
        </S.Wrapper>
    )
}

export default Header;
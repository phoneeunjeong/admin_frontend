import React from "react";
import * as S from "./styles";

const Card = () => {
    return(
        <S.Wrapper>
            <S.StudentInfo>
                <p>2415</p>
                <p>윤석훈</p>
            </S.StudentInfo>
            <div>
                <S.Device>
                    <p>O</p>
                    <p>X</p>
                    <p>O</p>
                </S.Device>
            </div>
        </S.Wrapper>
    )
}

export default Card;
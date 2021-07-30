import React, { HTMLProps, FC } from "react";
import * as S from "./styles";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    title: string
}

const Grade: FC<ButtonProps> = (props) => {
    return (
        <S.Wrapper>{props.title}학년</S.Wrapper>
    )
}

export default Grade;
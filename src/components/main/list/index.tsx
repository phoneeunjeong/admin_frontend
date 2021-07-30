import React, { HTMLProps } from "react";
import * as S from "./styles";
import { Phone, Laptop, PersonalLaptop } from "../../../assets/index";
import ListProps from "../../../interfaces/ListProps";

const List = ({ name, whether }: ListProps) => {
    return (
        <>
            <S.Block>
                <img src={Phone} alt="" />
                <S.List>
                    <div className="circle circle1">
                        <S.Name>{name}</S.Name>
                        <S.Whether>{whether}</S.Whether>
                    </div>
                </S.List>
            </S.Block>
            <S.Block>
                <img src={Laptop} alt="" />
                <S.List>
                    <div className="circle circle2"></div>
                </S.List>
            </S.Block>
            <S.Block>
                <img src={PersonalLaptop} alt="" />
                <S.List>
                    <div className="circle circle3"></div>
                </S.List>
            </S.Block>
        </>
    )
}

export default List;
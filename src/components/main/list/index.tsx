import React, { Component, ComponentElement, useEffect, useState } from "react";
import * as S from "./styles";
import { Phone, Laptop, PersonalLaptop } from "../../../assets/index";
import ListProps from "../../../interfaces/ListProps";
import Modal from "../modal/index";
import Card from "./card/index";

interface Props{
    isPage: boolean
}

const List = () => {

    // const [modal, setModal] = useState<React.ReactElement | null>(null);
    // const [data, setData] = useState({

    // })
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isPage, setIsPage] = useState<boolean>(true);

    const showModal = () => {
        setIsModal(true);
        setIsPage(false);
    }
    
    return (
        
        <S.Wrapper>
            <S.ListHeader>
                <S.Information>
                    <p>학번</p>
                    <p>이름</p>
                </S.Information>
                <S.Applied>
                    <img src={Phone} alt="" />
                    <img src={Laptop} alt="" />
                    <img src={PersonalLaptop} alt="" />
                </S.Applied>
            </S.ListHeader>
            {
                [...Array(30)].map((i, index) => {
                    return(
                        <Card />
                    )
                })
            }
        </S.Wrapper>
    )
}

export default List;
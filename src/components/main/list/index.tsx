import React, { Component, ComponentElement, useState } from "react";
import * as S from "./styles";
import { Phone, Laptop, PersonalLaptop } from "../../../assets/index";
import ListProps from "../../../interfaces/ListProps";
import Modal from "../modal/index";

const List = () => {

    const [modal, setModal] = useState(null);

    const modalChange = () => {
        setModal(
            <Modal />
        )
    }

    return (
        <>
            <S.Block>
                <img src={Phone} alt="" />
                <S.List>
                    <div className="circle circle1"></div>
                    {/* {
                        [...Array(8)].map((n, index) => {
                            return (
                                <ul>
                                    <S.Name>{name}</S.Name>
                                    <S.Whether style={whether ? { color: '#FF2525' } : { color: '#30A8FF' }}>{whether ? '미제출' : '지각'}</S.Whether>
                                </ul>
                            )
                        })
                    } */}
                </S.List>
            </S.Block>
            <S.Block>
                <img src={Laptop} alt="" />
                <S.List>
                    <div className="circle circle2"></div>
                    {
                        [...Array(8)].map((n, index) => {
                            return (
                                <ul>
                                    <S.Name>1101 폰은정</S.Name>
                                    <S.Whether>지각</S.Whether>
                                </ul>
                            )
                        })
                    }
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
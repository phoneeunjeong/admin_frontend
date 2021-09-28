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
        // <>
        // {isPage && (
        //     <>
        //         <S.Block>
        //             <img src={Phone} alt="" />
        //             <S.List>
        //                 <div className="circle circle1"></div>
        //             </S.List>
        //         </S.Block>
        //         <S.Block>
        //             <img src={Laptop} alt="" />
        //             <S.List>
        //                 <div className="circle circle2"></div>
                            
        //             </S.List>
        //         </S.Block>
        //         <S.Block>
        //             <img src={PersonalLaptop} alt="" />
        //             <S.List>
        //                 <div className="circle circle3"></div>
        //             </S.List>
        //         </S.Block>
        //     </>
        // )}
        // <Modal isModal={isModal} setIsPage={setIsPage} setIsModal={setIsModal} />
        // </>
        <S.Wrapper>
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
import React, { FC, useEffect, useState } from "react";
import * as S from "./styles";
import { Phone, Laptop, PersonalLaptop } from "../../../assets/index";
import ListProps from "../../../interfaces/ListProps";

interface Props {
    isModal : boolean,
    setIsModal: boolean | any,
    setIsPage: boolean | any
}


const Modal: FC<Props> = ({isModal, setIsPage, setIsModal}) => {
    const closeModal =() => {
        setIsModal(false);
        setIsPage(true);
    }

    return (
        <>
        {isModal && (
            <>  
            <S.Back></S.Back>
            <S.Wrapper>
                <S.Modal>
                    <S.Top>
                        <p></p>
                        <p>1101 psks</p>
                        <p style={{ cursor: "pointer" }} onClick={closeModal}>X</p>
                    </S.Top>
                    <S.Content>
                        <div>
                            <img src={Phone} alt="phone" />
                            {/* <p>{whether}</p> */}
                            <p>제출</p>
                        </div>
                        <div>
                            <img src={Laptop} alt="laptop" />
                            {/* <p>{whether}</p> */}
                            <p>제출</p>

                        </div>
                        <div>
                            <img src={PersonalLaptop} alt="personalLaptop" />
                            {/* <p>{whether}</p> */}
                            <p>제출</p>
                        </div>
                    </S.Content>
                    <S.Bottom>
                        <button>벌점주기</button>
                    </S.Bottom>
                </S.Modal>
            </S.Wrapper>
            </>
        )}
        </>
    )
}

export default Modal;
import React from "react";
import * as S from "./styles";
import { Phone, Laptop, PersonalLaptop } from "../../../assets/index";
import ListProps from "../../../interfaces/ListProps";

const Modal = () => {
    return (
        <S.Wrapper>
            <S.Modal>
                <S.Top>
                    <p></p>
                    <p>1101 psks</p>
                    <p>X</p>
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
    )
}

export default Modal;
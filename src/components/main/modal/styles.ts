import styled from "styled-components";
import { WIDTH, COLOR } from "../../../styles/index";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Modal = styled.nav`
    width: ${WIDTH.subWidth};
    height: 300px;
    border-radius: 20px;
    background: ${COLOR.whiteColor};
`

export const Top = styled.header`

    display: flex;
    justify-content: space-between;


    & p{
        color: ${COLOR.mainTextColor};
        font-size: 20px;
    }

    & p:nth-of-type(3){
        transform: translateX(-20px);
    }
    margin-top: 20px;

`

export const Content = styled.article`
    display: flex;
    margin-top: 50px;
    justify-content: space-around;

    & div{
        text-align: center;
    }
    
    & p{
        color: ${COLOR.mainTextColor};
        margin-top: 10px;
        font-size: 20px;
    }
`

export const Bottom = styled.footer`

    text-align: center; 
    margin-top: 40px;

    & button {
        background: #9F68FF;
        padding: 6px 25px;
        border-radius: 10px;
        font-weight: bold;
    }
`

export const Back = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: #000000;
    opacity: 45%;
    z-index: -1;
`
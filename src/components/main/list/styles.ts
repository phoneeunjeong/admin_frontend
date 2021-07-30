import styled from "styled-components";
import { COLOR } from "../../../styles/index";

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & img{
        width: 80px;
    }
    
`

export const List = styled.div`
    margin-top: -20px;
    z-index: -1;
    width: 350px;
    height: 540px;
    background: ${COLOR.whiteColor};
    border-radius: 15px; 
    display: flex;
    justify-content: center;

    .circle{
        width: 95px; 
        height: 50px;
        border-radius: 0px 0px 100px 100px;
    }

    .circle1{
        background: #9559FF;
    }
    .circle2{
        background: #9B64FF;
    }
    .circle3{
        background: #A06CFF ;
    }   
`

export const Name = styled.p`

`

export const Whether = styled.p`

`
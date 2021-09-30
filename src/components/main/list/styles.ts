import { EDEADLK } from "constants";
import styled from "styled-components";
import { COLOR } from "../../../styles/index";

export const Wrapper = styled.section`
    width: 100%;
    height: 100%; 
    display: flex;
    align-items: center;
    flex-direction: column;
`  

export const ListHeader = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    height: 45px;
    align-items: baseline;
    margin-bottom: 20px;
`

export const Information = styled.div`
    display: flex;
    & p{
        margin-left: 27px;
        font-size: 18px;
    }
`

export const Applied  = styled.div`
    display: flex;

    & img{
        width: 50px;
        margin-left: 70px;
    }
`
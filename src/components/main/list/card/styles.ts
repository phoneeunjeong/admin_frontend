import styled from "styled-components";
import {COLOR} from "../../../../styles/index";

export const Wrapper = styled.div`
    width: 90%;
    height: 45px;  
    border-radius: 50px;
    background: ${COLOR.whiteColor};    
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StudentInfo = styled.div`
    display: flex;
    margin-left: 20px;

    & p{
        color: ${COLOR.mainTextColor};
        margin-left: 10px;
    }
`

export const Device = styled.div`
    display: flex;
    margin-right: 20px;

    & p{
        color: ${COLOR.mainTextColor};
        margin-left: 100px;
        font-size: 20px;
        font-weight: bold;
    }
`
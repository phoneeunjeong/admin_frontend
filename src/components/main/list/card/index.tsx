import React,{FC, useState} from "react";
import * as S from "./styles";


const Card = () => {

    const [isApply, setIsApply] = useState<boolean>(false);

    return(
        <S.Wrapper>
            <S.StudentInfo>
                <p>2415</p>
                <p>윤석훈</p>
            </S.StudentInfo>
            <div>
                <S.Device>
                    <>
                        {isApply == false ?
                            <p style={{color: "#4bf94b"}}>O</p> : <p style={{color: "#ff4a3d"}}>X</p>    
                        }
                    </>
                    <>
                        {isApply == false ?
                            <p style={{color: "#4bf94b"}}>O</p> : <p style={{color: "#ff4a3d"}}>X</p>    
                        }
                    </>
                    <>
                        {isApply == false ?
                            <p style={{color: "#4bf94b"}}>O</p> : <p style={{color: "#ff4a3d"}}>X</p>    
                        }
                    </>
                </S.Device>
            </div>
        </S.Wrapper>
    )
}

export default Card;
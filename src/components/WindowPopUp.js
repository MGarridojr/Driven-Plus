import { useContext } from "react";
import styled from "styled-components";
import Context from "../contexts/Context";
import CancelButton from "./popUp buttons/CancelButton";
import SubmitButton from "./popUp buttons/SubmitButton";
export default function WindowPopUp(props){
    const { setVisible, visible} = useContext(Context)
    const { plan, planPrice } = props
    return(
        <> 
            {visible != false ?
                <OpaqueBody> 
                    <PopUp>
                        <p>Tem certeza que deseja assinar o plano {plan} (R${planPrice})?</p>
                        <div>
                            <CancelButton click={()=>{setVisible(false)}} text="Não"></CancelButton>    
                            <SubmitButton text="Sim"></SubmitButton>
                        </div>
                    </PopUp>
                </OpaqueBody> 
            :<></>
            }
        </>
    )
}

const PopUp = styled.div`
    position: fixed;
    width: 248px;
    height: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border-radius: 12px;
    top: 25%;
    left: 17%;
    > p{
        font-size: 18px;
        font-weight: 700;
        color: #000000;
        text-align: center;
        margin-bottom: 30px;
    }  
    > div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }  
`;

const OpaqueBody = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    left: 0;
    top: 0;

`
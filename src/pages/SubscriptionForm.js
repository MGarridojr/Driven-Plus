import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Context from "../contexts/Context";
import banknotes from "../assets/banknotesIcon.svg"
import checklist from "../assets/checklistIcon.svg"
import CredentialsInput from "../components/credentials/CredentialsInput";
import CredentialsButton from "../components/credentials/CredentialsButton";
import MiniInput from "../components/credentials/MiniInput";
import WindowPopUp from "../components/WindowPopUp";
import OnClickButton from "../components/credentials/OnClickButton";
export default function SubscriptionForm() {
    const { config, setVisible, setUserData, userData } = useContext(Context)
    const { IDPlan } = useParams()
    const [subscription, setSubscription] = useState([])
    const [cardName, setCardName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [securityNumber, setSecurityNumber] = useState("")
    const [expirationDate, setExpirationDate] = useState("")
    const Navigate = useNavigate()
    const cardData = {
        membershipId: IDPlan,
        cardName,
        cardNumber,
        securityNumber,
        expirationDate
    }

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${IDPlan}`,
            config)
                .then((response) => {
                    const { data } = response
                    setSubscription(data)
                })
                .catch(()=>{console.log(cardData)})
    }, []
    )

    function sendPaymentData(e){
        e.preventDefault();

        axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",
            cardData, 
            config)
            .then((response)=>{
                const { data } = response
                setUserData({membership: data })
                Navigate("/home")
            })
            .catch(Error)
    }
    const { perks, image, name, price } = subscription
    return (
        <>
            {perks ? 
                <>
                    <LogoContainer>
                        <img src={image} alt={name} />
                        <PlanTitle>{name}</PlanTitle>
                    </LogoContainer>
                    <Div>
                        <Sections>
                            <img src={checklist} />
                            <p>Benefícios:</p>
                        </Sections>
                        {perks.map((perk, id) =>{
                            return(
                                <p>{id + 1}. {perk.title}</p>
                            )
                        })}
                    </Div>
                    <Div>
                        <Sections>
                            <img src={banknotes} /> 
                            <p>Preço:</p>
                        </Sections>
                        <p>R${price} cobrados mensalmente</p>
                    </Div>
                    <form onSubmit={sendPaymentData}>
                        <CredentialsInput type="text" text="Nome impresso no cartão" change={(e)=>{
                            setCardName(e.target.value)
                        }} />
                        <CredentialsInput type="text" text="Numberos do cartão" change={(e)=>{
                            setCardNumber(e.target.value)
                        }} />
                        <Sections>
                            <MiniInput type="number" text="Código de segurança" change={(e)=>{
                            setSecurityNumber(e.target.value)
                        }} />
                            <MiniInput type="text" text="validade" change={(e)=>{
                            setExpirationDate(e.target.value)
                        }} />
                        </Sections>
                        <OnClickButton click={()=>{setVisible(true)}} text="Assinar" />
                        <WindowPopUp plan={name} planPrice={price} />                       
                    </form>
                </>
            :<><p>Carregando...</p></>
        }
        </>
    )
}

const Sections = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 15px;
    margin-bottom: 10px;

    > p{
        font-size: 16px;
        padding-left: 5px;
    }
    
`;

const PlanTitle = styled.p`
    text-align: center;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 11px;
    
    > p{
        font-size: 14px;
    }
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;
`;
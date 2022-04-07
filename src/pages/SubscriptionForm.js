import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";
import Context from "../contexts/Context";
import banknotes from "../assets/banknotesIcon.svg"
import checklist from "../assets/checklistIcon.svg"
import CredentialsInput from "../components/credentials/CredentialsInput";
import CredentialsButton from "../components/credentials/CredentialsButton";
import MiniInput from "../components/credentials/MiniInput";
export default function SubscriptionForm() {
    const { config } = useContext(Context)
    const { IDPlan } = useParams()
    const [subscription, setSubscription] = useState([])

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${IDPlan}`,
            config)
                .then((response) => {
                    const { data } = response
                    setSubscription(data)
                })
                .catch(Error)
    }, []
    )
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
                    <form>
                        <CredentialsInput type="text" text="Nome impresso no cartão" />
                        <CredentialsInput type="number" text="Digitos do cartão" />
                        <Sections>
                            <MiniInput type="number" text="Código de segurança" />
                            <MiniInput type="text" text="validade" />
                        </Sections>
                        <CredentialsButton text="Assinar" />
                    </form>
                </>
            :<>Carregando...</>
            }
            
        </>
    )
}

const Sections = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 20px;
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
`;
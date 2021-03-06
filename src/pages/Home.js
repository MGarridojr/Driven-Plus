import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import OnClickButton from "../components/credentials/OnClickButton";
import Context from "../contexts/Context";
import userIcon from "../assets/userIcon.svg"
import RedButton from "../components/homeButton/RedButton";
import axios from "axios";
export default function Home() {
    const { userData, config, setToken, setUserData, token } = useContext(Context)
    const { membership, name } = userData
    // const { perks, image } = membership
    const Navigate = useNavigate()

    function DeleteData(){
        axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",
        config)
        .then(Navigate("/subscriptions"))
        .catch(Error)
    }
    useEffect(()=>{
        if(!token){
            Navigate("/")
        }
    },[token]
    )
    
    return (
        <>        
            {token ? 
                <>                          
                    <Header>
                        <img src={membership.image} />
                        <img src={userIcon} />
                    </Header>
                    <Body>
                        <p>Olá, {name}</p>
                        {membership.perks.map((perk) => {
                            return (
                                <>
                                    <OnClickButton click={() => {
                                        window.location.href = perk.link
                                    }} text={perk.title} />
                                </>
                            )
                        })
                        
                        }
                    </Body>

                    <Footer>
                        <OnClickButton click={() => {
                            Navigate("/subscriptions")
                        }
                        } text="Mudar plano" />
                        <RedButton click={()=>{
                            DeleteData()
                        }} text="Cancelar plano" />
                    </Footer>
                </>        
            :
            <>
                <p>Carregando...</p>
            </>
            }
        </>
    )
}

const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 100px;
    min-width: 350px;
    > p{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
    }
`;
const Header = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-around;
    top: 30px;
    left: 0;
    min-width: 390px;
    width: 100%;
    > img{
        max-width: 75px;
        max-height: 51px;
        
    }
`;
const Footer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    position: absolute;
    min-width: 350px;
`;
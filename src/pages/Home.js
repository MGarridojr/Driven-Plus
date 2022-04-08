import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OnClickButton from "../components/credentials/OnClickButton";
import Context from "../contexts/Context";
import userIcon from "../assets/userIcon.svg"
import RedButton from "../components/homeButton/RedButton";
export default function Home(){
    const { userData } = useContext(Context)
    const { membership, name } = userData
    const { perks, image } = membership
    return(
        <>
        <Header>
            <img src={image} />
            <img src={userIcon} />
        </Header>
        <Body>
         <p>Olá, {name}</p>
         {perks.map((perk)=>{
             return(
                 <>
                    <OnClickButton text={perk.title} />
                 </>
             )
         })}
        </Body>
            
         <Footer>
            <OnClickButton text="Mudar plano" />
            <RedButton text="Cancelar plano" />
         </Footer>
         
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
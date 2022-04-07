import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Context from "../contexts/Context";
export default function Subscriptions(){
    const { config } = useContext(Context);
    const [memberships, setMemberships] = useState([])
    
    
    useEffect(()=>{
        axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships", 
        config)
        .then((response) => {
            const { data } = response
            setMemberships(data)
        })
        .catch(Error)
    }, []
    )
    return(
        <>
            <Title>Escolha seu Plano</Title>  
                {memberships ? memberships.map((membership) =>{
                    return(
                        <>
                             <Link style={{textDecoration: 'none'}} to={`/subscriptions/${membership.id}`}>
                                <Card>
                                    <img src={membership.image}  />
                                    <p>R${membership.price}</p>
                                </Card>
                            </Link>
                         </>
                        )
                })
                :
                    <>
                        <p>Carregando...</p>
                        {console.log(memberships)}
                    </>
                }
            
        </>
    )
}

const Card = styled.div`
    width: 270px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0E0E13;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    margin-bottom: 10px;

    > p{
        color: #FFFFFF;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
    }
`
const Title = styled.p`
    color: #FFFFFF;
    text-align: center;
    font-weight: 700;
    font-size: 32px;
    line-height: 37px;
    margin-bottom: 30px;
    
`
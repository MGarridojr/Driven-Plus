import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CredentialsButton from "../components/credentials/CredentialsButton";
import CredentialsInput from "../components/credentials/CredentialsInput";
import CredentialsLink from "../components/credentials/CredentialsLink";
import Logo from "../components/Logo";
import Context from "../contexts/Context";
export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setToken, setUserData } = useContext(Context)
    const Navigate = useNavigate()
    const loginData = {
        email,
        password
    }
    function sendLogin(e){
        e.preventDefault();

        axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", loginData)
        .then((response)=>{
            const {data} = response
            setToken(data.token)
            setUserData(data) 
            localStorage.setItem("email", loginData.email) 
            localStorage.setItem("password", loginData.password)
            {data.membership != null ? 
                Navigate("/home")
                : Navigate("/subscriptions")
            }
                       
        })
    }
    return(
        <>

            <Logo />
            <form onSubmit={sendLogin}>
            <CredentialsInput type="email" text="E-mail" change={(e)=> {
                    setEmail(e.target.value)
                }}  />
            <CredentialsInput type="password" text="Senha" change={(e)=> {
                    setPassword(e.target.value)
                }} />
            <CredentialsButton text="ENTRAR" />
            <CredentialsLink rote="/sign-up" text="Não possuí uma conta? Cadastre-se"></CredentialsLink>
            </form>
        </>
    )
}

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CredentialsButton from "../components/credentials/CredentialsButton";
import CredentialsInput from "../components/credentials/CredentialsInput";
import CredentialsLink from "../components/credentials/CredentialsLink";
import Logo from "../components/Logo";
import { cpfMask } from "../components/validation/mask";
export default function Register(){
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Navigate = useNavigate();
    const registrationData = {
        // email: email
        email,
        name,
        cpf,
        password
    }

    function SendRegister(e){
        e.preventDefault();

        axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", registrationData )
        .then(Navigate("/"))
        .catch(Error)

    }
    return (
        <>
            <Logo />
            <form onSubmit={SendRegister}>
                <CredentialsInput type="text" text="Nome" change={(e)=> {
                    setName(e.target.value)
                }} />
                <CredentialsInput type="text" text="CPF"change={(e)=> {
                    setCpf(
                        cpfMask(e.target.value)
                    )
                }}  />
                <CredentialsInput type="email" text="E-mail" change={(e)=> {
                    setEmail(e.target.value)
                }} />
                <CredentialsInput type="password" text="Senha" change={(e)=> {
                    setPassword(e.target.value)
                }} />
                <CredentialsButton text="CADASTRAR" />
                <CredentialsLink rote="/" text="Já possuí uma conta? Entre" />
            </form>
        </>
    )
}
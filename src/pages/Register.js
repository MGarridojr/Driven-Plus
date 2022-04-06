import { useState } from "react";
import styled from "styled-components";
import CredentialsButton from "../components/credentials/CredentialsButton";
import CredentialsInput from "../components/credentials/CredentialsInput";
import CredentialsLink from "../components/credentials/CredentialsLink";
import Logo from "../components/Logo";
export default function Register(){
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function SendRegister(){

    }
    return (
        <>
            <Logo />
            <form>
                <CredentialsInput type="text" text="Nome" change={(info)=> {
                    setName(info.target.value)
                }} />
                <CredentialsInput type="number" text="CPF"change={(info)=> {
                    setCpf(info.target.value)
                }}  />
                <CredentialsInput type="email" text="E-mail" change={(info)=> {
                    setEmail(info.target.value)
                }} />
                <CredentialsInput type="password" text="Senha" change={(info)=> {
                    setPassword(info.target.value)
                }} />
                <CredentialsButton text="CADASTRAR" />
                <CredentialsLink rote="/" text="Já possuí uma conta? Entre" />
            </form>
        </>
    )
}
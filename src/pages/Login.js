import { useState } from "react";
import styled from "styled-components";
import CredentialsButton from "../components/credentials/CredentialsButton";
import CredentialsInput from "../components/credentials/CredentialsInput";
import CredentialsLink from "../components/credentials/CredentialsLink";
import Logo from "../components/Logo";
export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return(
        <>

            <Logo />
            <form>
            <CredentialsInput type="email" text="E-mail" change={(info)=> {
                    setEmail(info.target.value)
                }}  />
            <CredentialsInput type="password" text="Senha" change={(info)=> {
                    setPassword(info.target.value)
                }} />
            <CredentialsButton text="ENTRAR" />
            <CredentialsLink rote="/sign-up" text="Não possuí uma conta? Cadastre-se"></CredentialsLink>
            </form>
        </>
    )
}

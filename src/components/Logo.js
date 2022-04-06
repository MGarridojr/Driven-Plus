import styled from "styled-components";
import logo from "../assets/Logo.svg"
export default function Logo(){
    return(
        <>
            <StartPageLogo src={logo} alt="logo" />
        </>
    )
}
const StartPageLogo = styled.img`
    margin-bottom: 40px;
`;
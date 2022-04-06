import { Link } from "react-router-dom";
import styled from "styled-components";
export default function CredentialsLink(props){
    const {rote, text} = props
    return(
        <>
            <Links to={rote}>{text}</Links>           
        </>
    )
}
const Links = styled(Link)`
    color: #FFFFFF;
    font-size: 14px;
`
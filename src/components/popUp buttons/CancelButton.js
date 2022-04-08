import styled from "styled-components";
export default function CancelButton(props){
    const { text, click } = props
    return(
        <>
            <CredentialButton onClick={click}>{text}</CredentialButton>
        </>
    )
}
const CredentialButton = styled.button`
    color: #FFFFFF;
    width: 95px;
    height: 52px;
    background-color: #CECECE;
    border-radius: 8px;
    border: none;
    color: #FFFFFF;
    margin: 5px;
`;
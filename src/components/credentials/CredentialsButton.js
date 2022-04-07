import styled from "styled-components";
export default function CredentialsButton(props){
    const { text } = props
    return(
        <>
            <CredentialButton type="submit">{text}</CredentialButton>
        </>
    )
}
const CredentialButton = styled.button`
    color: #FFFFFF;
    background-color: #FF4791;
    width: 100%;
    height: 52px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    border: none;
    border-radius: 8px;
    margin-top: 11px;
    margin-bottom: 20px;
`;
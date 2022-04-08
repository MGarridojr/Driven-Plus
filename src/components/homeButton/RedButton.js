import styled from "styled-components";
export default function RedButton(props){
    const { text, click } = props
    return(
        <>
            <CredentialButton type="button" onClick={click}>{text}</CredentialButton>
        </>
    )
}
const CredentialButton = styled.button`
    color: #FFFFFF;
    background-color: #FF4747;
    width: 95%;
    min-width: 260px;
    height: 52px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    border: none;
    border-radius: 8px;
    margin-top: 11px;
    margin-bottom: 5px;
`;
import styled from "styled-components";
export default function SubmitButton(props){
    const { text } = props
    return(
        <>
            <CredentialButton type="submit">{text}</CredentialButton>
        </>
    )
}
const CredentialButton = styled.button`
    color: #FFFFFF;
    width: 95px;
    height: 52px;
    background-color: #FF4791;
    border-radius: 8px;
    border: none;
    color: #FFFFFF;
    margin: 5px;
`;
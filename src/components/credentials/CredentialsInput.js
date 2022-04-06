import styled from "styled-components";
export default function CredentialsInput(props){
    const {type, text, change} = props
    return(
        <>
            <CredentialInput type={type} placeholder={text} onChange={change} />
        </>
    )
}

const CredentialInput = styled.input`
    width: 95%;
    height: 52px;
    padding-left: 14px;
    border-radius: 8px;
    color: #7E7E7E;
    margin-bottom: 12px;
    border: none;
;
`;
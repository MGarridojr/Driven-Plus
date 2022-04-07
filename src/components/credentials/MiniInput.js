import styled from "styled-components";
export default function MiniInput(props){
    const {type, text, change} = props
    return(
        <>
            <Input type={type} placeholder={text} onChange={change} />
        </>
    )
}

const Input = styled.input`
    width: 41%;
    height: 52px;
    padding-left: 14px;
    border-radius: 8px;
    color: #7E7E7E;
    margin-bottom: 12px;
    border: none;
    margin-left:11px
;
`;
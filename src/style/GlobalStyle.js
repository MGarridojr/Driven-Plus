import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        font-family: "Roboto";
    }
    body {
        width: 100%;
        height: 100%;
        min-width: 375px;
        min-height: 657px;
        background-color: #0E0E13;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    form {
        width: 99%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    p{
        color: #FFFFFF;
    }
    
`;
export default GlobalStyle
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Reset } from 'styled-reset'
import Login from '../pages/Login'
import Register from '../pages/Register'
import GlobalStyle from '../style/GlobalStyle'

export default function App(){
    return(
        <>
            <BrowserRouter>
                <Reset />
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<Register />} />
                </Routes>
            </BrowserRouter>
            
           
        </>
    )
}
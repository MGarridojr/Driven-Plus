import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Reset } from 'styled-reset'
import Context from '../contexts/Context'
import Login from '../pages/Login'
import Register from '../pages/Register'
import GlobalStyle from '../style/GlobalStyle'

export default function App(){
    const [token, setToken] = useState("")
    const [userName, setUserName] = useState("")
    const ContextProvider = {}
    return(
        <>
            <Context.Provider value={{
                token,
                setToken,
                userName,
                setUserName
            }}>
                <BrowserRouter>
                    <Reset />
                    <GlobalStyle />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/sign-up" element={<Register />} />
                    </Routes>
                </BrowserRouter>
            </Context.Provider> 
        </>
    )
}
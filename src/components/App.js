import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Reset } from 'styled-reset'
import Context from '../contexts/Context'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SubscriptionForm from '../pages/SubscriptionForm'
import Subscriptions from '../pages/Subscriptions'
import GlobalStyle from '../style/GlobalStyle'

export default function App(){
    const [token, setToken] = useState("")
    const [userName, setUserName] = useState("")
    const [visible, setVisible] = useState(false)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    return(
        <>
            <Context.Provider value={{
                token,
                setToken,
                userName,
                setUserName,
                config,
                visible,
                setVisible
            }}>
                <BrowserRouter>
                    <Reset />
                    <GlobalStyle />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/sign-up" element={<Register />} />
                        <Route path="/subscriptions" element={<Subscriptions />} />
                        <Route path="/subscriptions/:IDPlan" element={<SubscriptionForm />} />
                    </Routes>
                </BrowserRouter>
            </Context.Provider> 
        </>
    )
}
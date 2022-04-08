import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Reset } from 'styled-reset'
import Context from '../contexts/Context'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SubscriptionForm from '../pages/SubscriptionForm'
import Subscriptions from '../pages/Subscriptions'
import GlobalStyle from '../style/GlobalStyle'

export default function App(){
    const [token, setToken] = useState("")
    const [userData, setUserData] = useState({})
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
                userData,
                setUserData,
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
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </Context.Provider> 
        </>
    )
}
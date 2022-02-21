import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews"
import { Navbar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./Bookkeeper.css"

export const Bookkeeper = () => {
    const [token, setTokenState] = useState(localStorage.getItem('bk_token'))
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [token])

    const setToken = (newToken) => {
        localStorage.setItem('bk_token', newToken)
        setTokenState(newToken)
    }

    return (
        <>
            {
                token
                    ?
                    <>
                        <Navbar />
                        <ApplicationViews />
                    </>
                    : ""
            }
            <Routes>
                <Route path="/login" element={<><Login /></>} />
                <Route path="/register" element={<><Register /></>} />
            </Routes>
        </>
    )
}
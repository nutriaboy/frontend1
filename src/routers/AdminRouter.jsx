import { Route, Routes } from "react-router-dom"
import { Admin } from "../pages/Admin"
import { Navbar } from "../components/Navbar"

export const AdminRouter = () => {
    return (
        <>
        <Navbar />
            <Routes>
                <Route path="/" element={<Admin />} />
            </Routes>
        </>
    )
}

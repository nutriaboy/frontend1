import { Route, Routes } from "react-router-dom"
import { Admin } from "../pages/Admin"

export const AdminRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Admin />} />
            </Routes>
        </>
    )
}

import { Route, Routes } from 'react-router-dom'
import { Admin } from '../pages/Admin'
import { Navbar } from '../components/Navbar'
import { Cervezas } from '../pages/Cervezas'

export const AdminRouter = () => {
    return (
        <>
        <Navbar />
            <Routes>
                <Route path="/" element={<Cervezas />} />
                <Route path="/proveedores" element={<Admin />} />
            </Routes>
        </>
    )
}

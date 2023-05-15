import { Route, Routes } from 'react-router-dom'
import { Admin } from '../pages/Admin'
import { Navbar } from '../components/Navbar'
import { Cervezas } from '../pages/Cervezas'
import { EditarPerfil } from '../pages/EditarPerfil'
import { Usuarios } from '../pages/Usuarios'

export const AdminRouter = () => {
    return (
        <>
        <Navbar />
            <Routes>
                <Route path="/" element={<Cervezas />} />
                <Route path="/proveedores" element={<Admin />} />
                <Route path="/editarPerfil" element={<EditarPerfil />} />
                <Route path="/usuarios" element={<Usuarios />} />
            </Routes>
        </>
    )
}

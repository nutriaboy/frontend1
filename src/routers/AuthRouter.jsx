import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from '../pages/Login'


export const AuthRouter = () => {

    const Register = () => {
        return (<h1>Registrar ...</h1>)
    
      }

  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/*" element={ <Navigate to="/auth/login" replace />}/>

      </Routes>
  )
}

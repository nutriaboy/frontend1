import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from '../pages/Login'
import { Register } from "../pages/Register"


export const AuthRouter = () => {

  // const Register = () => {
  //   return (<h1>Registrar ...</h1>)

  // }

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/*" element={<Navigate to="/auth/login" replace />} />

          </Routes>

        </div>
      </div>
    </div>

  )
}

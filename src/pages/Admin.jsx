import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

export const Admin = () => {
    const navigate = useNavigate();
    const {logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        localStorage.removeItem('token');
        navigate('/auth', {
            replace: true
        });
    }

    return (
        <div>
            <h1>Admin</h1>
            <br/>

            <button
                className="btn btn-dark btn-lg"
                type='submit'
                onClick={handleLogout}
            >
                Cerrar Sesión
            </button>
        </div>
    )
}

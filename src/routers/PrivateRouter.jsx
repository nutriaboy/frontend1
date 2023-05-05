import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

export const PrivateRouter = ({ children }) => {
    const { auth, verificarToken} = useContext(AuthContext);

    useEffect(() => {
        verificarToken();
    }, [])

    if ( auth.checking) {
        return <h1> Esperar...</h1>
    }

  return auth.logged
        ?   children
        :   <Navigate to="/auth/login" /> 
}

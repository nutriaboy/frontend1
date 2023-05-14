import { createContext, useCallback, useState } from 'react';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';



// Creacion del contexto
export const AuthContext = createContext();

const initialState = {
    checking: true,
    uid: null,
    name: null,
    correo: null,
    logged: false,
}

// Proveer contexto
export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(initialState);

    const login = async (correo, password) => {
        const resp = await fetchSinToken('auth/admin', { correo, password }, 'POST')
        try {
            if (resp.ok) {
                localStorage.setItem('token', resp.token);
                const { usuario } = resp;
                setAuth({
                    checking: false,
                    uid: usuario.uid,
                    name: usuario.nombre,
                    correo: usuario.correo,
                    logged: true,
                })
            }
    
            // condicion para ver error del backend
            if (resp.msg === undefined && !resp.ok){
                resp.msg = resp.errors[0].msg
            }
    
            return [ resp.ok, resp.msg]
            
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        setAuth(initialState);
    }

    const verificarToken = useCallback( async() =>{
        const token = localStorage.getItem('token');

        if (!token) {
            setAuth({
                checking: false,
                logged: false,
                uid: null,
                name: null,
                correo: null,
            })
            return false;
        }

        const resp = await fetchConToken('auth/')
        if (resp.ok) {
            localStorage.setItem('token', resp.token);
            const { usuario } = resp;
            setAuth({
                checking: false,
                logged: true,
                uid: usuario.uid,
                name: usuario.nombre,
                correo: usuario.correo
            });
            return true;
        } else {
            setAuth({
                checking: false,
                logged: false,
                uid: null,
                name: null,
                correo: null,
            });
            return false;
        }
    })


    return (
        <AuthContext.Provider value={{
            auth,
            login,
            logout,
            verificarToken,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
import { createContext, useReducer } from 'react';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';
import { usuarioReducer } from '../reducers/usuarioReducer';
import { types } from '../types/types';



export const UsuarioContext = createContext();

const initialState = {
    isLoading: true,
    usuarios: [],
    usuario: {},
    proveedor: [],
    selectProveedor: {},
    isOk: false,
    modalOpen: false
}

export const UsuarioProvider = ({ children }) => {

    const [state, dispatch] = useReducer(usuarioReducer, initialState);

    const register = async(...data) => {
        const [nombre, apellido, correo, password, telefono, direccion, genero] = data;

        const resp = await fetchSinToken('usuarios', {nombre, apellido, correo, password, telefono, direccion, genero}, 'POST');

        if( resp.ok ){
            const { usuario } = resp;
            dispatch({
                type: types.registrarUsuario,
                payload: usuario
            })
            const msg = 'Se ha registrado con exito';
            return [ msg, resp.ok ]
        }
        const {msg} = resp.errors[0]

        if(msg){
            return [msg]
        }

    }

    const obtenerProveedor = async() => {
        const resp = await fetchConToken('proveedores');

        if (resp.ok){
            const { proveedores } = resp;
            dispatch({
                type: types.obtenerProveedores,
                payload: proveedores
            })
        }
    }

    const seleccionarProveedor = ({...data}) => {
        dispatch({
            type: types.seleccionarProveedor,
            payload: data
        })
    }

    const limpiarSeleccionProveedor = () => {
        dispatch({ type: types.limpiarSeleccionProveedor})
    }

    const uiOpenModal = () => {
        dispatch({type: types.uiOpenModal});
    } 
    const uiCloseModal = () => {
        dispatch({type: types.uiCloseModal});
    } 


    return (
        <UsuarioContext.Provider value={{
            state,
            register,
            obtenerProveedor,
            seleccionarProveedor,
            uiOpenModal,
            uiCloseModal,
            limpiarSeleccionProveedor,
        }}>
            { children }
        </UsuarioContext.Provider>
    )
}


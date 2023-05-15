import { createContext, useReducer } from 'react';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';
import { usuarioReducer } from '../reducers/usuarioReducer';
import { types } from '../types/types';



export const UsuarioContext = createContext();

const initialState = {
    isLoading: true,
    usuarios: [],
    totalUsuarios: 0,
    usuario: {},
    proveedor: [],
    totalProveedor: 0,
    selectProveedor: {},
    isOk: false,
    modalOpen: false
}

export const UsuarioProvider = ({ children }) => {

    const [state, dispatch] = useReducer(usuarioReducer, initialState);

    const obtenerUsuarios = async () => {
        const resp = await fetchConToken(`usuarios?limite=${100}`);
        if (resp.ok) {
            const { usuarios, total } = resp;
            
            dispatch({
                type: types.obtenerUsuarios,
                payload: [usuarios, total]
            })
        }

    }

    const register = async (...data) => {
        const [nombre, apellido, correo, rut, password, telefono, direccion, genero] = data;

        const resp = await fetchSinToken('usuarios', { nombre, apellido, correo, rut, password, telefono, direccion, genero }, 'POST');

        if (resp.ok) {
            const { usuario } = resp;
            dispatch({
                type: types.registrarUsuario,
                payload: usuario
            })
            const msg = 'Se ha registrado con exito';
            return [msg, resp.ok]
        }
        const { msg } = resp.errors[0]

        if (msg) {
            return [msg]
        }

    }

    const editarRolUsuario = async (rol, uid) => {
        
        const resp = await fetchConToken(`usuarios/admin/${uid}`, {rol}, 'PUT');

        if (resp.ok){
            const {usuario} = resp;
            dispatch({
                type: types.editarRolUsuario,
                payload: usuario
            });
            return true;
        }
        console.log(resp);
    }

    const obtenerProveedor = async (desde = 0) => {
        const resp = await fetchConToken(`proveedores?desde=${desde}`);


        if (resp.ok) {
            const { proveedores, total } = resp;
            dispatch({
                type: types.obtenerProveedores,
                payload: [proveedores, total]
            })
        }
    }

    const crearProveedor = async (...data) => {
        const [nuevoProveedor] = data
        const { nombre, correo, rut, telefono, direccion } = nuevoProveedor
        const resp = await fetchConToken('proveedores', { nombre, correo, rut, telefono, direccion }, 'POST');
        if (resp.ok) {
            obtenerProveedor();
            const msg = false;
            return [msg];
        }
        if (!resp.ok && !resp.msg) {
            const { msg } = resp.errors[0];
            return [msg];
        }
        const { msg } = resp;
        return [msg];
    }

    const actualizarProveedor = async (...data) => {
        const [dataProveedor] = data
        const { nombre, correo, rut, telefono, direccion, uid } = dataProveedor;
        // console.log(dataProveedor)
        const resp = await fetchConToken(`proveedores/${uid}`, { nombre, correo, telefono, direccion }, 'PUT');
        console.log(resp);
        if (resp.ok) {
            const { proveedor } = resp;
            dispatch({
                type: types.actualizarProveedor,
                payload: proveedor
            });
            return true;
        }
        if (!resp.ok && !resp.msg) {
            const { msg } = resp.errors[0]
            return [msg]
        }
        const { msg } = resp
        return [msg]
    }

    const eliminarProveedor = async (uid) => {
        const resp = await fetchConToken(`proveedores/${uid}`, {}, 'DELETE');

        console.log(resp);
        if (resp.ok) {
            const { proveedorBorrado } = resp
            dispatch({
                type: types.eliminarProveedor,
                payload: proveedorBorrado
            });
            return true;
        }

    }

    const seleccionarProveedor = ({ ...data }) => {
        dispatch({
            type: types.seleccionarProveedor,
            payload: data
        })
    }

    const limpiarSeleccionProveedor = () => {
        dispatch({ type: types.limpiarSeleccionProveedor })
    }

    const uiOpenModal = () => {
        dispatch({ type: types.uiOpenModal });
    }
    const uiCloseModal = () => {
        dispatch({ type: types.uiCloseModal });
    }


    return (
        <UsuarioContext.Provider value={{
            state,
            obtenerUsuarios,
            register,
            editarRolUsuario,
            obtenerProveedor,
            crearProveedor,
            actualizarProveedor,
            eliminarProveedor,
            seleccionarProveedor,
            uiOpenModal,
            uiCloseModal,
            limpiarSeleccionProveedor,
        }}>
            {children}
        </UsuarioContext.Provider>
    )
}


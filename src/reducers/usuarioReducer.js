import { types } from "../types/types";



export const usuarioReducer = (state, action) => {
    switch (action.type) {
        case types.registrarUsuario:
            return {
                ...state,
                usuario: action.payload
            }

        case types.obtenerProveedores:
            return {
                ...state,
                proveedor: action.payload,
                isLoading: false
            }

        case types.seleccionarProveedor:
            return {
                ...state,
                selectProveedor: action.payload,
                isOk: true
            }

        case types.limpiarSeleccionProveedor:
            return { 
                ...state,
                selectProveedor: {},
                isOk: false
            }

        case types.uiOpenModal:
            return {
                ...state,
                modalOpen: true
            }

        case types.uiCloseModal:
            return {
                ...state,
                modalOpen: false
            }

        default:
            return state;
    }
}
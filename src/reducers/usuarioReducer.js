import { types } from '../types/types';



export const usuarioReducer = (state, action) => {
    switch (action.type) {

        case types.obtenerUsuarios: 
            return {
                ...state,
                usuarios: action.payload[0],
                totalUsuarios: action.payload[1],
                isLoading: false
            }

        case types.registrarUsuario:
            return {
                ...state,
                usuario: action.payload
            }

        case types.editarRolUsuario:
            return {
                ...state,
                usuarios: state.usuarios.map(
                    e => ( e.uid === action.payload.uid)
                                ? action.payload
                                : e
                )
            }

        case types.eliminarUsuario: 
            return {
                ...state,
                usuarios: state.usuarios.filter(
                    e => ( e.uid === action.payload.uid)
                                ? false
                                : true
                )
            }

        case types.obtenerProveedores:
            return {
                ...state,
                proveedor: action.payload[0],
                totalProveedor: action.payload[1],
                isLoading: false
            }

        case types.actualizarProveedor: 
        return {
            ...state,
            proveedor: state.proveedor.map(
                e => ( e.uid === action.payload.uid)
                            ? action.payload
                            : e
            )
        }

        case types.eliminarProveedor: 
        return {
            ...state,
            proveedor: state.proveedor.filter(
                e => ( e.uid === action.payload.uid)
                            ? false
                            : true
            )
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
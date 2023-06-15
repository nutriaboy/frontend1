import { types } from '../types/types';


export const cervezaReducer = (state, action) => {
    switch (action.type) {

        case types.obtenerCervezas:
            return {
                ...state,
                cervezas: action.payload,
                isLoading: false
            }

        case types.crearCompra:
            return {
                ...state,
                compraCreada: action.payload
            }

        case types.obtenerDetallesCervezas:
            return {
                ...state,
                detallesCervezas: action.payload,
                isLoading: false
            }

        case types.crearDetalleCerveza:
            return {
                ...state,
                creadoDetalleCerveza: action.payload
            }

        case types.actualizarCerveza:
            return {
                ...state,
                cervezas: state.cervezas.map(
                    e => ( e.id === action.payload.id)
                                ? action.payload
                                : e
                )
            }

        case types.eliminarCerveza:
            return {
                ...state,
                cervezas: state.cervezas.filter(
                    e => (e.id === action.payload.id)
                        ? false
                        : true
                )
            }

        case types.seleccionarCerveza:
            return {
                ...state,
                selectCerveza: action.payload,
                isOk: true
            }
        case types.uiOpenModalEditarCerveza:
            return{
                ...state,
                modalEditarCerveza: true
            }
        case types.uiCloseModalEditarCerveza:
            return{
                ...state,
                modalEditarCerveza: false
            }

        case types.obtenerProveedorByCerveza:
            return {
                ...state,
                proveedor: action.payload
            }

        case types.obtenerTipoCerveza:
            return {
                ...state,
                tipoCerveza: action.payload
            }

        case types.uiOpenModalCerveza:
            return {
                ...state,
                modalOpen: true
            }
        case types.uiCloseModalCerveza:
            return {
                ...state,
                modalOpen: false
            }

        case types.uiOpenModalDetalleCerveza:
            return {
                ...state,
                modalOpen2: true
            }
        case types.uiCloseModalDetalleCerveza:
            return {
                ...state,
                modalOpen2: false
            }

        case types.limpiarModalDetalleCerveza:
            return {
                ...state,
                cleanInputModal2: true
            }

        case types.uiOpenModalCantidad:
            return {
                ...state,
                modalOpen3: true,
                cleanInputModal2: false
            }
        case types.uiCloseModalCantidad:
            return {
                ...state,
                modalOpen3: false
            }

        default:
            return state;
    }
}

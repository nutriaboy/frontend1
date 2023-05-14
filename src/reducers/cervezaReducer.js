import { types } from '../types/types';


export const cervezaReducer = (state, action) => {
    switch (action.type) {

        case types.obtenerCervezas:
            return {
                ...state,
                cervezas: action.payload
            }

        case types.crearCerveza:
            return {
                ...state,
                cervezaCreada: action.payload
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

        case types.actualizarDetalleCerveza:
            return {
                ...state,
                detallesCervezas: state.detallesCervezas.map(
                    e => ( e.id === action.payload.id)
                                ? action.payload
                                : e
                )
            }

        case types.eliminarDetalleCerveza:
            return {
                ...state,
                detallesCervezas: state.detallesCervezas.filter(
                    e => (e.id === action.payload.id)
                        ? false
                        : true
                )
            }

        case types.seleccionarDetalleCerveza:
            return {
                ...state,
                selectDC: action.payload,
                isOk: true
            }
        case types.uiOpenModalEditarDC:
            return{
                ...state,
                modalEditarDC: true
            }
        case types.uiCloseModalEditarDC:
            return{
                ...state,
                modalEditarDC: false
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

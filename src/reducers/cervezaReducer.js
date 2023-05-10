import { types } from '../types/types';


export const cervezaReducer = (state, action) => {
    switch (action.type) {

        case types.obtenerCervezas:
            return {
                ...state,
                cervezas: action.payload
            }

        case types.obtenerDetallesCervezas:
            return {
                ...state,
                detallesCervezas: action.payload,
                isLoading: false
            }
        
        case types.obtenerProveedorByCerveza:
            return {
                ...state,
                proveedor: action.payload
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

        default:
            return state;
    }
}

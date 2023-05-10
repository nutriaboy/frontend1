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

        default:
            return state;
    }
}

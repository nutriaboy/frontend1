import { types } from "../types/types";



export const usuarioReducer = ( state, action) => {
    switch (action.type) {
        case types.registrarUsuario:
            return {
                ...state,
                usuario: action.payload
            }
    
        default:
            return state;
    }
}
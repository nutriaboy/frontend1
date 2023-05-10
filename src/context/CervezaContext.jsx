import { createContext, useReducer } from 'react';
import { fetchConToken } from '../helpers/fetch';
import { cervezaReducer } from '../reducers/cervezaReducer';
import { types } from '../types/types';


export const CervezaContext = createContext();

const initialState = {
    isLoading: true,
    cervezas: [],
    detallesCervezas: [],
    proveedor: [],
    modalOpen: false,
    modalOpen2: false,

}

export const CervezaProvider = ({ children }) => {

    const [stateCerveza, dispatch] = useReducer(cervezaReducer, initialState);

    const obtenerProveedorByCerveza = async (limite = 5) => {
        const resp = await fetchConToken(`proveedores?limite=${limite}`);
        if (resp.ok) {
            const { proveedores } = resp;
            dispatch({
                type: types.obtenerProveedorByCerveza,
                payload: proveedores
            });
            return true;
        }

    }

    const obtenerCervezas = async () => {
        const resp = await fetchConToken('cervezas');
        if (resp.ok) {
            const { cervezas } = resp;
            dispatch({
                type: types.obtenerCervezas,
                payload: cervezas
            });
            return true;
        }

    }

    const obtenerDetallesCervezas = async () => {
        const resp = await fetchConToken('detalleCervezas');
        if (resp.ok) {
            const { detallesCervezas } = resp;
            dispatch({
                type: types.obtenerDetallesCervezas,
                payload: detallesCervezas
            });
            return true;

        }
    }

    const openModalCerveza = () => {
        dispatch({
            type: types.uiOpenModalCerveza
        })
    }
    const closeModalCerveza = () => {
        dispatch({
            type: types.uiCloseModalCerveza
        })
    }

    return (
        <CervezaContext.Provider value={{
            stateCerveza,
            obtenerProveedorByCerveza,
            obtenerCervezas,
            obtenerDetallesCervezas,
            openModalCerveza,
            closeModalCerveza,
        }}>
            {children}
        </CervezaContext.Provider>
    )
}

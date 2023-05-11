import { createContext, useReducer } from 'react';
import { fetchConToken } from '../helpers/fetch';
import { cervezaReducer } from '../reducers/cervezaReducer';
import { types } from '../types/types';


export const CervezaContext = createContext();

const initialState = {
    isLoading: true,
    cervezas: [],
    cervezaCreada: {},
    detallesCervezas: [],
    creadoDetalleCerveza: {},
    proveedor: [],
    tipoCerveza: [],
    modalOpen: false,
    modalOpen2: false,
    modalOpen3: false,
    cleanInputModal2: false,

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

    const crearCerveza = async (proveedor) => {
        const resp = await fetchConToken('cervezas', { proveedor }, 'POST');
        if (resp.ok) {
            const { cerveza } = resp;
            dispatch({
                type: types.crearCerveza,
                payload: cerveza
            })
        }
    }

    const obtenerDetallesCervezas = async () => {
        //TODO: Solo temporal hasta que haya paginación
        const resp = await fetchConToken('detalleCervezas?limite=100');
        if (resp.ok) {
            const { detallesCervezas } = resp;
            dispatch({
                type: types.obtenerDetallesCervezas,
                payload: detallesCervezas
            });
            return true;

        }
    }

    const crearDetalleCervezas = async (...rest) => {
        const [data] = rest;
        const { cerveza, idTipoC: tipoCerveza, marca, nombre, precioUnit } = data;

        const resp = await fetchConToken('detalleCervezas', { cerveza, tipoCerveza, marca, nombre, precioUnit }, 'POST');
        if (resp.ok) {
            const { detalleCerveza } = resp;
            dispatch({
                type: types.crearDetalleCerveza,
                payload: detalleCerveza
            })
        }
        obtenerDetallesCervezas();
    }


    const obtenerTipoCerveza = async (limite = 5) => {
        const resp = await fetchConToken(`tipoCervezas?limite=${limite}`);
        if (resp.ok) {
            const { tipoCervezas } = resp;
            dispatch({
                type: types.obtenerTipoCerveza,
                payload: tipoCervezas
            });
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

    const openModalDetalleCerveza = () => {
        dispatch({
            type: types.uiOpenModalDetalleCerveza
        })
    }
    const closeModalDetalleCerveza = () => {
        dispatch({
            type: types.uiCloseModalDetalleCerveza
        })
    }

    const openModalCantidadCerveza = () => {
        dispatch({
            type: types.uiOpenModalCantidad
        })
    }
    const closeModalCantidadCerveza = () => {
        dispatch({
            type: types.uiCloseModalCantidad
        })
    }

    const limpiarModalDetalleCerveza = () => {
        dispatch({
            type: types.limpiarModalDetalleCerveza
        })
    }



    return (
        <CervezaContext.Provider value={{
            stateCerveza,
            obtenerProveedorByCerveza,
            obtenerCervezas,
            crearCerveza,
            obtenerDetallesCervezas,
            crearDetalleCervezas,
            obtenerTipoCerveza,
            openModalCerveza,
            closeModalCerveza,
            openModalDetalleCerveza,
            closeModalDetalleCerveza,
            limpiarModalDetalleCerveza,
            openModalCantidadCerveza,
            closeModalCantidadCerveza,
        }}>
            {children}
        </CervezaContext.Provider>
    )
}

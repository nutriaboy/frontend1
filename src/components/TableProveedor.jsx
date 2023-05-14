import { useContext, useEffect, useState } from 'react'
import { UsuarioContext } from '../context/UsuarioContext'
import { ItemTableProveedor } from './ItemTableProveedor';
import { ModalProveedor } from './ModalProveedor';

export const TableProveedor = () => {

    const { state, uiOpenModal, obtenerProveedor } = useContext(UsuarioContext);
    const { proveedor, totalProveedor } = state;

    const [paginacion, setPaginacion] = useState({
        paginas: 1,
        desdeProveedor: 0,
    });

    useEffect(() => {
        if (paginacion.desdeProveedor < totalProveedor ) {
            obtenerProveedor(paginacion.desdeProveedor);
        }
    }, [paginacion])

    const PaginasTotales = () => {
        const valor = Math.ceil(totalProveedor / 5);
        return valor;
    }
    
    
    const incrementPagina = () => {
        const {desdeProveedor, paginas} = paginacion;
        const valor = PaginasTotales();
        
        if (valor > paginas){
            setPaginacion({
                ...paginacion,
                desdeProveedor: desdeProveedor + 5,
                paginas: paginas + 1
            });
            return true;
        }
    }
    
    const decrementPagina = () => {
        const {desdeProveedor, paginas} = paginacion;
        if (desdeProveedor !== 0 ){
            setPaginacion({
                ...paginacion,
                desdeProveedor: desdeProveedor - 5,
                paginas: paginas - 1
            });
            return
        }
    }


    const todoOkIncremento = () => {
        const valor = PaginasTotales();
        
      
        return (valor > paginacion.paginas) ? true : false;
    }

    const todoOkDecremento = () => {
        return (paginacion.desdeProveedor !== 0) ? true : false;
    }

    const openModal = () => {
        uiOpenModal();
    }
    
    return (
        <div className="container-xxl">
            <ModalProveedor />
                <button
                    className='btn btn-info'
                    style={{marginBottom: 7}}
                    onClick={openModal}
                >
                    Agregar Proveedor</button>


            <table
                className='table table-striped table-dark table-hover'
            // style={{ height: 500 }}
            >
                <thead>
                    <tr>
                        <th /*style={{ width: 80}}*/ scope="col">Nombre</th>
                        <th /*style={{ width: 150}}*/ scope="col">Correo</th>
                        <th /*style={{ width: 80}}*/ scope="col">Rut</th>
                        <th /*style={{ width: 80}}*/ scope="col">Teléfono</th>
                        <th /*style={{ width: 80}}*/ scope="col">Dirección</th>
                        <th /*style={{ width: 80}}*/ scope="col">Editar</th>
                        <th /*style={{ width: 80}}*/ scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        proveedor.map((proveedor, index) =>
                            <ItemTableProveedor
                                key={proveedor.uid}
                                id={index + 1}
                                {...proveedor}
                            />
                            // console.log(proveedor, index)
                        )
                    }

                    {/* <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr> */}

                </tbody>
            </table>
            <div className='d-grid gap-2 d-md-flex justify-content-md-center '>
                <button 
                    className='btn btn-dark'
                    onClick={decrementPagina}
                    disabled={!todoOkDecremento()}
                >
                    ←
                </button>
                <button 
                    className='btn btn-dark'
                    onClick={incrementPagina}
                    disabled={!todoOkIncremento()}
                >
                    →
                </button>

            </div>
        </div>
    )
}

import { useContext, useEffect, useState } from 'react'
import { UsuarioContext } from '../context/UsuarioContext'
import { ItemTableProveedor } from './ItemTableProveedor';
import { ModalProveedor } from './ModalProveedor';

export const TableProveedor = () => {

    const { state, uiOpenModal } = useContext(UsuarioContext);
    const { proveedor, totalProveedor } = state;

    const [paginacion, setPaginacion] = useState({
        paginasTotales: 0,
        paginaActual: 1
    });
    // const {paginasTotales, paginaActual} = paginacion;

    useEffect(() => {
        calcularPaginasTotales()
    }, [])
    
    
    const calcularPaginasTotales = () => {
        const valor = Math.ceil(totalProveedor / 5);
        setPaginacion({
            ...paginacion,
            paginasTotales: valor
        });
    }
    
    const validarSiguientePagina = () => {
        console.log('siguiente');
    }
    
    const validarVolverPagina = () => {
        console.log('atras');
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
                        <th /*style={{ width: 80}}*/ scope="col">ID</th>
                        <th /*style={{ width: 80}}*/ scope="col">Nombre</th>
                        <th /*style={{ width: 150}}*/ scope="col">Correo</th>
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
                    onClick={validarVolverPagina}
                    // disabled
                >
                    ←
                </button>
                <button 
                    className='btn btn-dark'
                    onClick={validarSiguientePagina}
                    // disabled
                >
                    →
                </button>

            </div>
        </div>
    )
}

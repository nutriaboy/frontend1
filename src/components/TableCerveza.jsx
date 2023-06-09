import { useContext } from 'react'
import { CervezaContext } from '../context/CervezaContext'
import { ItemTableCerveza } from './ItemTableCerveza';
import { ModalCerveza } from './modalCerveza/ModalCerveza';
import { ModalDetalleCerveza } from './modalCerveza/ModalDetalleCompra';
// import { ModalCantidad } from './modalCerveza/ModalCantidad';
import { ModalEditarCerveza } from './modalCerveza/ModalEditarCerveza';



export const TableCerveza = () => {
    const { stateCerveza, openModalCerveza } = useContext(CervezaContext);
    const { cervezas } = stateCerveza;

    const openModal = () => {
        openModalCerveza()
    }

    return (
        <div className="container-xxl">
            <ModalCerveza />
            <ModalDetalleCerveza />
            <ModalEditarCerveza />
            {/* <ModalCantidad /> */}
            <button
                className='btn btn-info'
                style={{ marginBottom: 7 }}
                onClick={openModal}
            >
                Agregar Cerveza</button>


            <table
                className='table table-striped table-dark table-hover'
            >
                <thead>
                    <tr>
                        <th /*style={{ width: 80}}*/ scope="col">ID</th>
                        <th /*style={{ width: 80}}*/ scope="col">Nombre</th>
                        <th /*style={{ width: 150}}*/ scope="col">Marca</th>
                        <th /*style={{ width: 80}}*/ scope="col">Tipo Cerveza</th>
                        <th /*style={{ width: 80}}*/ scope="col">Precio</th>
                        <th /*style={{ width: 80}}*/ scope="col">Stock</th>
                        <th /*style={{ width: 80}}*/ scope="col">Editar</th>
                        <th /*style={{ width: 80}}*/ scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cervezas.map((cerveza, index) =>
                            <ItemTableCerveza
                                key={cerveza.id}
                                ids={index + 1}
                                {...cerveza}
                            />
                        )
                    }
                    {/* <ItemTableCerveza/> */}

                    {/* <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr> */}

                </tbody>
            </table>
        </div>
    )
}

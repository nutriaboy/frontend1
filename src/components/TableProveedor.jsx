import { useContext } from 'react'
import { UsuarioContext } from '../context/UsuarioContext'
import { ItemTableProveedor } from './ItemTableProveedor';
import { ModalProveedor } from './ModalProveedor';

export const TableProveedor = () => {

    const { state, uiOpenModal } = useContext(UsuarioContext);
    const { proveedor } = state;

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
        </div>
    )
}

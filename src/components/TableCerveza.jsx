import { useContext } from 'react'
import { CervezaContext } from '../context/CervezaContext'
import { ItemTableCerveza } from './ItemTableCerveza';



export const TableCerveza = () => {
    const { stateCerveza } = useContext(CervezaContext);
    const { detallesCervezas } = stateCerveza

    return (
        <div className="container-xxl">

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
                        <th /*style={{ width: 80}}*/ scope="col">Editar</th>
                        <th /*style={{ width: 80}}*/ scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        detallesCervezas.map((detalleCerveza, index) => 
                            <ItemTableCerveza
                                key={detalleCerveza.id}
                                ids={index + 1}
                                {...detalleCerveza}
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

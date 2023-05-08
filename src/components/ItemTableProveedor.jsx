
export const ItemTableProveedor = (...data) => {
    const [proveedor] = data;

    const editarProveedor = (e) => {
        e.preventDefault();
        console.log(proveedor.uid)
    }
    const eliminarProveedor = (e) => {
        e.preventDefault();
        console.log('eliminar')
    }

    return (
        <tr>
            <td>{proveedor.id}</td>
            <td>{proveedor.nombre}</td>
            <td>{proveedor.correo}</td>
            <td>{proveedor.telefono}</td>
            <td>{proveedor.direccion}</td>
            <td>
                <button className='btn btn-info' onClick={editarProveedor}>Editar</button>
            </td>
            <td>
                <button className='btn btn-danger' onClick={eliminarProveedor}>Borrar</button>
            </td>
            
        </tr>
    )
}

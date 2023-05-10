

export const ItemTableCerveza = (...data) => {
    const [cerveza] = data;

    const editarCerveza = (e) => {
        e.preventDefault();
        console.log('editarCerveza')

    }

    const eliminarCerveza = (e) => {
        e.preventDefault();
        console.log('eliminarCerveza')

    }

  return (
    <tr>
            <td>{cerveza.ids}</td>
            <td>{cerveza.nombre}</td>
            <td>{cerveza.marca}</td>
            <td>{cerveza.tipoCerveza.nombre}</td>
            <td>{cerveza.precioUnit}</td>
            <td>
                <button className='btn btn-info' onClick={editarCerveza}>Editar</button>
            </td>
            <td>
                <button className='btn btn-danger' onClick={eliminarCerveza}>Borrar</button>
            </td>
            
        </tr>
  )
}

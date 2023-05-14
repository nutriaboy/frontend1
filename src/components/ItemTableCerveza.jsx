import { useContext } from "react";
import { CervezaContext } from "../context/CervezaContext";
import Swal from "sweetalert2";


const deleteAlert = {
    title: 'Eliminar Detalle Cerveza',
    iconColor:'#FF0000',
    text: "¿Desea eliminar este Detalle Cerveza?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc3545',
    cancelButtonColor: '#5C5B5B',
    confirmButtonText: 'Si, Eliminar!'
  }

export const ItemTableCerveza = (...data) => {
    const [cerveza] = data;
    const {actualizarDetalleCerveza, eliminarDetalleCerveza, seleccionarDetalleCerveza, openModalEditarDC} = useContext(CervezaContext);

    const editarCerveza = (e) => {
        e.preventDefault();
        seleccionarDetalleCerveza(cerveza);
        openModalEditarDC();

    }

    const eliminarCerveza = (e) => {
        e.preventDefault();
        Swal.fire(deleteAlert).then((result) => {
            if (result.isConfirmed) {
                
                eliminarDetalleCerveza(cerveza.id)
    
              Swal.fire(
                  'Eliminado!',
                  'Se ha sido eliminado el registro.',
                  'success'
              )
            }
          })
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

import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';
import Swal from 'sweetalert2';

const deleteAlert = {
    title: 'Eliminar Proveedor',
    iconColor:'#FF0000',
    text: "¿Desea eliminar este Proveedor?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc3545',
    cancelButtonColor: '#5C5B5B',
    confirmButtonText: 'Si, Eliminar!'
  }

export const ItemTableProveedor = (...data) => {

    const {seleccionarProveedor, uiOpenModal, eliminarProveedor} = useContext(UsuarioContext);
    const [proveedor] = data;
    

    const editarProveedor = (e) => {
        e.preventDefault();
        seleccionarProveedor(proveedor);
        uiOpenModal();
    }
        
    const eliminarProveedorSeleccionado = (e) => {
        e.preventDefault();
        const {uid} = proveedor; 

        Swal.fire(deleteAlert).then((result) => {
            if (result.isConfirmed) {
                
                eliminarProveedor(uid)
    
              Swal.fire(
                  'Guardado!',
                  'El Proveedor ha sido eliminado.',
                  'success'
              )
            }
          })

    }

    return (
        <tr>
            <td>{proveedor.nombre}</td>
            <td>{proveedor.correo}</td>
            <td>{proveedor.rut}</td>
            <td>{proveedor.telefono}</td>
            <td>{proveedor.direccion}</td>
            <td>
                <button className='btn btn-info' onClick={editarProveedor}>Editar</button>
            </td>
            <td>
                <button className='btn btn-danger' onClick={eliminarProveedorSeleccionado}>Borrar</button>
            </td>
            
        </tr>
    )
}

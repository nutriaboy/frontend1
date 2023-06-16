import { useContext } from "react";
import { CervezaContext } from "../context/CervezaContext";
import Swal from "sweetalert2";


const deleteAlert = {
    title: 'Eliminar Cerveza',
    iconColor:'#FF0000',
    text: "¿Desea eliminar esta Cerveza?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc3545',
    cancelButtonColor: '#5C5B5B',
    confirmButtonText: 'Si, Eliminar!'
  }

export const ItemTableCerveza = (...data) => {
    let [cerveza] = data;
    const { eliminarCerveza, seleccionarCerveza, openModalEditarCerveza, stateCerveza} = useContext(CervezaContext);
    const {tiposCervezas} = stateCerveza;

    
    
    const handleGetTipoCerveza = () => {
      // console.log(tiposCervezas)

      let nombreTC = cerveza.tipoCerveza.nombre || '';
      let valorTC = ''
      if (cerveza.tipoCerveza.nombre === undefined)
      {
        valorTC =  tiposCervezas.find((itemTC) => itemTC.id === cerveza.tipoCerveza);
        return nombreTC = valorTC.nombre;
      }
      return nombreTC;
    }

    const editarCerveza = (e) => {
        e.preventDefault();
        seleccionarCerveza(cerveza);
        openModalEditarCerveza();

    }

    const eliminarCervezaById = (e) => {
      // console.log(cerveza);
        e.preventDefault();
        Swal.fire(deleteAlert).then((result) => {
            if (result.isConfirmed) {
                
              eliminarCerveza(cerveza.id)
    
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
            <td>{(handleGetTipoCerveza())}</td>
            <td>{cerveza.precioUnit}</td>
            <td>{cerveza.stock}</td>
            <td>
                <button className='btn btn-info' onClick={editarCerveza}>Editar</button>
            </td>
            <td>
                <button className='btn btn-danger' onClick={eliminarCervezaById}>Borrar</button>
            </td>
            
        </tr>
  )
}

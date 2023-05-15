import React, { useContext } from 'react'
import { UsuarioContext } from '../context/UsuarioContext';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const warningAlert = {
    title: 'Cambiar Rol',
    iconColor: '#20a9f9',
    text: "¿Seguro que quieres cambiar el Rol?",
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#207CF9',
    cancelButtonColor: '#5C5B5B',
    confirmButtonText: 'Si, Modificar Rol!'
}

export const ItemTableUsuario = (...data) => {
    const [usuario] = data;
    const { editarRolUsuario } = useContext(UsuarioContext);
    const { auth } = useContext(AuthContext);
    const { uid } = auth;

    const cambiarRolUsuario = (e) => {
        e.preventDefault();

        Swal.fire(warningAlert).then((result) => {
            if (result.isConfirmed) {

                (usuario.rol === 'USER_ROLE') ? editarRolUsuario('ADMIN_ROLE', usuario.uid) : editarRolUsuario('USER_ROLE', usuario.uid)

                Swal.fire(
                    'Guardado!',
                    'Rol Cambiado...',
                    'success'
                )
            }
        })

    }

    return (
        <>
            {
                (uid === usuario.uid)
                    ? null
                    : (<tr>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.apellido}</td>
                        <td>{usuario.correo}</td>
                        <td>{usuario.rut}</td>
                        <td>{usuario.telefono}</td>
                        <td>{usuario.direccion}</td>
                        <td>{(usuario.genero === 'F') ? 'Femenino' : 'Masculino'}</td>
                        <td>{usuario.rol}</td>
                        <td>
                            <button className={(usuario.rol === 'USER_ROLE') ? 'btn btn-success ' : 'btn btn-danger'} onClick={cambiarRolUsuario} >
                                {
                                    (usuario.rol === 'USER_ROLE') ? 'Administrador' : 'Usuario'
                                }

                            </button>
                        </td>


                    </tr>)
            }
        </>
    )
}

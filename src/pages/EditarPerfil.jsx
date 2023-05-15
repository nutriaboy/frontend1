import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const warningAlert = {
    title: 'Actualizar Usuario',
    iconColor:'#F99020',
    text: "¿Seguro que quieres Actualizar los Datos?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#207CF9',
    cancelButtonColor: '#5C5B5B',
    confirmButtonText: 'Si, Actualizar!'
  }

export const EditarPerfil = () => {
    const navigate = useNavigate();
    const {auth, editarPerfilUsuario} = useContext(AuthContext);
    const {user} = auth;
    const [usuarioInfo, setUsuarioInfo] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        direccion: '',
    });
    const { nombre, apellido, correo, telefono, direccion } = usuarioInfo;

    useEffect(() => {
        if(Object.entries(user).length !== 0){
            setUsuarioInfo(user);
        }
    }, [user])
    

    const handleInputChange = ({ target }) => {
        setUsuarioInfo({
            ...usuarioInfo,
            [target.name]: target.value
        });
    }

    const handleReturn = (e) => {
        e.preventDefault();
        navigate( -1 ); // Volver a la pagina anterior
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const {uid} = user;
        Swal.fire(warningAlert).then((result) => {
            if (result.isConfirmed) {
                editarPerfilUsuario({nombre, apellido, correo, telefono, direccion, uid});
                navigate( -1 );
    
              Swal.fire(
                  'Guardado!',
                  'Datos Actualizados...',
                  'success'
              )
            }
          })
    }

    const todoOk = () => {
        return ((nombre.length > 1 && apellido.length > 1 && correo.length > 1 && telefono.length > 1 && direccion.length > 1 ) ? true : false)
    }

    return (
        <div className="limiter">
            <div className="container-login101">
                <div className="wrap-login100 p-l-40 p-r-40 p-t-30 p-b-40"
                // style={{marginTop: -80}}
                >
                    <form
                        className='container'
                    >
                        <h2>Actualizar Perfil</h2>
                        <hr />

                        <div className='form-group'>
                            <label>Nombre</label>
                            <input
                                className='form-control mb-2'
                                type='text'
                                placeholder='Nombre'
                                name='nombre'
                                value={nombre}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Apellido</label>
                            <input
                                className='form-control mb-2'
                                type='text'
                                placeholder='Apellido'
                                name='apellido'
                                value={apellido}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Correo</label>
                            <input
                                className='form-control mb-2'
                                type='text'
                                placeholder='Correo'
                                name='correo'
                                value={correo}
                                onChange={handleInputChange}
                                disabled
                            />
                        </div>
                        <div className='form-group'>
                            <label>Teléfono</label>
                            <input
                                className='form-control mb-2'
                                type='text'
                                placeholder='Teléfono'
                                name='telefono'
                                value={telefono}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className='form-group'>
                            <label>Dirección</label>
                            <input
                                className='form-control mb-2'
                                type='text'
                                placeholder='Dirección'
                                name='direccion'
                                value={direccion}
                                onChange={handleInputChange}
                            />
                        </div>


                        <div className="d-grid gap-2">
                            <button 
                                type="submit"
                                className='btn btn-block btn-dark mt-4'
                                disabled={!todoOk()}
                                onClick={handleUpdate}
                            >
                                Guardar
                            </button>
                            <button 
                                type="submit"
                                className='mt-1 btn-volver'
                                onClick={handleReturn}
                            >
                                Volver
                            </button>
                        </div>

                    </form>


                </div>
            </div>
        </div>
    )
}

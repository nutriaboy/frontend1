import React, { useContext, useEffect } from 'react'
import { UsuarioContext } from '../context/UsuarioContext'
import { TableUsuario } from '../components/TableUsuario';

export const Usuarios = () => {
  const { obtenerUsuarios, state } = useContext(UsuarioContext);
  const { isLoading } = state;

  useEffect(() => {
    obtenerUsuarios()
  }, [])

  return (

    <div>
      <h1 className="text-center mt-5">Usuarios</h1>
      <br />
      {
        (isLoading)
          ? (<h2 className='container'>Cargando...</h2>)
          : <TableUsuario />
      }


    </div>
  )
}

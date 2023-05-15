import React, { useContext } from 'react'
import { UsuarioContext } from '../context/UsuarioContext'
import { ItemTableUsuario } from './ItemTableUsuario';

export const TableUsuario = () => {
    const {state} = useContext(UsuarioContext);
    const {usuarios} = state;
    return (
        <div className="container-xxl">

            {/* <button
                    className='btn btn-info'
                    style={{marginBottom: 7}}
                    onClick={openModal}
                >
                    Agregar Proveedor</button> */}


            <table
                className='table table-striped table-dark table-hover'
            >
                <thead>
                    <tr>
                        <th /*style={{ width: 80}}*/ scope="col">Nombre</th>
                        <th /*style={{ width: 80}}*/ scope="col">Apellido</th>
                        <th /*style={{ width: 150}}*/ scope="col">Correo</th>
                        <th /*style={{ width: 80}}*/ scope="col">Rut</th>
                        <th /*style={{ width: 80}}*/ scope="col">Teléfono</th>
                        <th /*style={{ width: 80}}*/ scope="col">Dirección</th>
                        <th /*style={{ width: 80}}*/ scope="col">Genero</th>
                        <th /*style={{ width: 80}}*/ scope="col">Rol</th>
                        <th /*style={{ width: 80}}*/ scope="col">Cambiar Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario) => 
                            <ItemTableUsuario
                                key={usuario.uid}
                                {...usuario}
                            />
                        )
                    }


                  

                </tbody>
            </table>

        </div>
    )
}

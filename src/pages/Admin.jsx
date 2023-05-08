import { useContext, useEffect } from 'react'
import { TableProveedor } from '../components/TableProveedor'
import { UsuarioContext } from '../context/UsuarioContext'

export const Admin = () => {

    const {obtenerProveedor, state} = useContext(UsuarioContext);
    const { isLoading } = state;

    useEffect(() => {
      
        obtenerProveedor()
     
    }, [])
    
    

    return (
        <div>
            <h1 className="text-center">Admin</h1>
            <br/>
            {
                (isLoading)
                    ? (<h2 className='container'>Cargando...</h2>)
                    : <TableProveedor />
            }
            
            
        </div>
    )
}

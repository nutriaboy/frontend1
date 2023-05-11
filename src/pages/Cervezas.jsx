import { useContext, useEffect } from 'react'
import { TableCerveza } from '../components/TableCerveza'
import { CervezaContext } from '../context/CervezaContext'


export const Cervezas = () => {

  const { obtenerCervezas, obtenerDetallesCervezas, stateCerveza, obtenerProveedorByCerveza, obtenerTipoCerveza } = useContext(CervezaContext);
  const { isLoading } = stateCerveza;

  useEffect(() => {
    obtenerProveedorByCerveza(100);
    obtenerTipoCerveza(100);
    obtenerCervezas();
    obtenerDetallesCervezas();
  }, [])

  return (
    <div  /*style={{backgroundColor: 'purple'}*/>
      <h1 className="text-center mt-5">Administrar Cervezas</h1>
      <br />


      {
        (isLoading)
          ? (<h2 className='container'>Cargando...</h2>)
          : <TableCerveza />
      }


    </div>
  )
}

import Modal from 'react-modal/lib/components/Modal';
import '../../css/modal.css';
import { useContext, useEffect, useState } from 'react';
import { CervezaContext } from '../../context/CervezaContext';
import Swal from 'sweetalert2';


const warningAlert = {
    title: 'Actualizar Detalle Cerveza',
    iconColor:'#F99020',
    text: "¿Seguro que quieres Actualizar los Datos?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#207CF9',
    cancelButtonColor: '#5C5B5B',
    confirmButtonText: 'Si, Actualizar!'
  }

export const ModalEditarDC = () => {

    const { stateCerveza, closeModalEditarDC, actualizarDetalleCerveza } = useContext(CervezaContext);
    const { modalEditarDC, tipoCerveza, selectDC } = stateCerveza;

    const [idTipoCerveza, setIdTipoCerveza] = useState()
    const [dataDC, setDataDC] = useState({
        nombre: '',
        marca: '',
        idTipoC: '',
        precioUnit: '0'
    });
    const { nombre, marca, precioUnit, id } = dataDC;


    useEffect(() => {
        // ? Evaluar si el objeto viene vacio
        if (Object.entries(selectDC).length !== 0) {
            setDataDC(selectDC)
            const {_id} = selectDC.tipoCerveza
            setIdTipoCerveza(_id);
            
        }
    }, [selectDC])

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    Modal.setAppElement('#root');

    const modalClose = (e) => {
        e.preventDefault();
        closeModalEditarDC();
        setTimeout(() => {
            setIdTipoCerveza({})
        }, 200);

    }

    const handleInputChange = ({ target }) => {
        setDataDC({
            ...dataDC,
            [target.name]: target.value
        })
    }

    const handleSave = (e) => {
        e.preventDefault();
        Swal.fire(warningAlert).then((result) => {
            if (result.isConfirmed) {
                actualizarDetalleCerveza({ id, nombre, marca, precioUnit, idTipoCerveza });
                closeModalEditarDC();
    
              Swal.fire(
                  'Guardado!',
                  'Datos Actualizados...',
                  'success'
              )
            }
          })
    }

    const onChange = (e) => {
        setIdTipoCerveza(
            e.target.value
        )
    }

    const todoOk = () => {
        return ((typeof (idTipoCerveza) === "string" && idTipoCerveza !== '1') ? true : false)
    }

    return (
        <>
            <Modal
                isOpen={modalEditarDC}
                // onAfterOpen={afterOpenModal}
                onRequestClose={modalClose}
                style={customStyles}
                className="modal modal_5"
                closeTimeoutMS={250}
                overlayClassName="modal-fondo"
            >


                <h2 >Agregar Detalle Cerveza</h2>

                <hr />
                <form
                    className='container'
                >
                    <div className='form-group'>
                        <label>Nombre</label>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Nombre'
                            name='nombre'
                            value={nombre}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Marca</label>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Marca'
                            name='marca'
                            value={marca}
                            onChange={handleInputChange}
                        />
                    </div>

                    <label>Tipo de Cerveza</label>
                    <select
                        className="form-select"
                        onChange={onChange}
                        value={idTipoCerveza}
                    >
                        <option value={1}  >Elegir Tipo de Cerveza...</option>

                        {
                            tipoCerveza.map((tipoCerv) =>
                                <option value={tipoCerv.id} key={tipoCerv.id}>{tipoCerv.nombre}</option>

                            )
                        }
                    </select>

                    <div className='form-group'>
                        <label>Precio</label>
                        <div className='input-group mb-3'>

                            <span className="input-group-text" id="basic-addon1">$</span>
                            <input
                                className='form-control'
                                type='number'
                                placeholder='Precio'
                                name='precioUnit'
                                value={precioUnit}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>


                    <div className="d-grid gap-2">

                        <button className='btn btn-outline-dark mt-3' disabled={!todoOk()} onClick={handleSave}>
                            Guardar Cambio
                        </button>


                        <button className='btn btn-outline-danger' onClick={modalClose}>
                            Cerrar

                        </button>

                    </div>

                </form>


            </Modal>
        </>
    )
}

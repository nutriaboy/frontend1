import { useContext, useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { CervezaContext } from '../../context/CervezaContext';



export const ModalCantidad = ({ data }) => {

    const { stateCerveza, closeModalCantidadCerveza, openModalDetalleCerveza, crearDetalleCervezas } = useContext(CervezaContext);
    const { modalOpen3, cervezaCreada } = stateCerveza;
    const [totalOfCerveza, setTotalOfCerveza] = useState({
        cantidad: 1
    });
    const { cantidad } = totalOfCerveza;


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
        closeModalCantidadCerveza();
    }

    const crearDetalleCerveza = (e) => {
        e.preventDefault();
        closeModalCantidadCerveza();
        data.cerveza = cervezaCreada.id;
        // !Funcion para insertar varios elementos al backend
        crearDetallesCer(cantidad, data);
    }

    const crearDetallesCer = (numRepeticion, ...rest) => {
        const [dataDetalleCerveza] = rest;
        console.log(numRepeticion);
        for (let i = 0; i < numRepeticion; i++) {
            crearDetalleCervezas(dataDetalleCerveza)
        }

    }

    const returnModal = (e) => {
        e.preventDefault();
        openModalDetalleCerveza();
        closeModalCantidadCerveza();
    }

    const handleInputChange = ({ target }) => {
        setTotalOfCerveza({
            ...totalOfCerveza,
            [target.name]: target.value
        })
    }

    return (
        <Modal
            isOpen={modalOpen3}
            // onAfterOpen={afterOpenModal}
            onRequestClose={modalClose}
            style={customStyles}
            className="modal modal_4"
            closeTimeoutMS={300}
            overlayClassName="modal-fondo"
        >

            <h2 >Cantidad de Cervezas a Ingresar</h2>
            <hr />



            <form
                className='container'
            >
                <div className='input-group input-group-lg mt-4'>
                    {/* <label>Cantidad</label> */}
                    <span className="input-group-text">Cantidad</span>
                    <input
                        className='form-control'
                        type='number'
                        placeholder='cantidad'
                        name='cantidad'
                        value={cantidad}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="d-grid gap-2">

                    <button className='btn btn-outline-dark mt-5' onClick={crearDetalleCerveza}>
                        Crear

                    </button>

                    <button className='btn btn-outline-dark' onClick={returnModal}>
                        Volver

                    </button>


                    <button className='btn btn-outline-danger ' onClick={modalClose}>
                        Cerrar

                    </button>

                </div>

            </form>


        </Modal>
    )
}

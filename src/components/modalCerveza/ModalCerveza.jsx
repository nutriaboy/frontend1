import Modal from 'react-modal/lib/components/Modal';

import React, { useContext, useState } from 'react';
import '../../css/modal.css';
import { CervezaContext } from '../../context/CervezaContext';


export const ModalCerveza = () => {

    const { stateCerveza, closeModalCerveza, openModalDetalleCerveza, limpiarModalDetalleCerveza, crearCompra } = useContext(CervezaContext);
    const { modalOpen, proveedor } = stateCerveza;
    const [idProveedor, setIdProveedor] = useState({})

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
        closeModalCerveza();
        setTimeout(() => {
            setIdProveedor({})
        }, 200);
    }

    const siguienteModal = (e) => {
        e.preventDefault();
        closeModalCerveza();
        openModalDetalleCerveza();
        limpiarModalDetalleCerveza();
        crearCompra(idProveedor);
        setTimeout(() => {
            setIdProveedor({})
        }, 200);
    }

    const onChange = (e) => {
        setIdProveedor(
            e.target.value
        )
    }

    const todoOk = () => {
        return ((typeof(idProveedor) === "string" && idProveedor !== '1') ? true : false) 
    }


    return (
        <Modal
            isOpen={modalOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={modalClose}
            style={customStyles}
            className="modal modal_3"
            closeTimeoutMS={200}
            overlayClassName="modal-fondo"
        >


            <h2 >Seleccionar Proveedor</h2>


            <hr />
            <form 
                className='container'
            >
                <label>Proveedor</label>
                <select
                    className="form-select"
                    onChange={onChange}
                    value={idProveedor}
                // defaultValue="DEFAULT"
                >
                    <option value={1}  >Elegir Proveedor...</option>

                    {
                        proveedor.map((prov) =>
                            <option value={prov.uid} key={prov.uid}>{prov.nombre}</option>

                        )
                    }
                    
                </select>

                <div className="d-grid gap-2">

                    <button className='btn btn-outline-dark mt-3' disabled={!todoOk()} onClick={siguienteModal}>
                        Siguiente

                    </button>


                    <button className='btn btn-outline-danger ' onClick={modalClose}>
                        Cerrar

                    </button>

                </div>

            </form>


        </Modal>
    )
}

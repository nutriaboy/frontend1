import Modal from 'react-modal/lib/components/Modal';

import React, { useContext, useState } from 'react';
import '../../css/modal.css';
import { CervezaContext } from '../../context/CervezaContext';


export const ModalCerveza = () => {

    const { stateCerveza, closeModalCerveza } = useContext(CervezaContext);
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
        console.log(idProveedor)
        setTimeout(() => {
            setIdProveedor({})
        }, 200);
    }

    const onChange = (e) => {
        setIdProveedor(
            e.target.value
        )

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
                    {/* <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option> */}
                </select>

                <div className="d-grid gap-2">

                    <button className='btn btn-outline-dark mt-3' onClick={modalClose}>
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

import Modal from 'react-modal/lib/components/Modal';

import '../css/modal.css';
import { useContext, useEffect, useState } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';


export const ModalProveedor = () => {

    const { state, uiCloseModal, limpiarSeleccionProveedor } = useContext(UsuarioContext);
    const { modalOpen, selectProveedor, isOk } = state;

    const [dataProveedor, setDataProveedor] = useState({});
    const { nombre = '', correo = '', telefono = '', direccion = '' } = dataProveedor;

    useEffect(() => {
        if (selectProveedor) {
            setDataProveedor(selectProveedor)
        }
    }, [selectProveedor])



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

    const handleInputChange = ({ target }) => {
        setDataProveedor({
            ...dataProveedor,
            [target.name]: target.value
        })
    }

    const handleSave = (e) => {
        e.preventDefault();
        // limpiarSeleccionProveedor()

    }
    const closeModal = () => {
        setTimeout(() => {
            limpiarSeleccionProveedor();
        }, 210);
        uiCloseModal();
    }

    const todoOk = () => {
        return (nombre.length > 1 && correo.length > 1 && telefono.length > 1 && direccion.length > 1) ? true : false;
    }


    return (
        <Modal
            isOpen={modalOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            className="modal modal_2"
            closeTimeoutMS={200}
            overlayClassName="modal-fondo"
        >
            {
                (!isOk)
                    ? (<h1>Crear Proveedor</h1>)
                    : (<h1>Editar Proveedor</h1>)
            }

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
                    <label>Correo</label>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Correo'
                        name='correo'
                        value={correo}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Teléfono</label>
                    <input
                        className='form-control'
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
                        className='form-control'
                        type='text'
                        placeholder='Dirección'
                        name='direccion'
                        value={direccion}
                        onChange={handleInputChange}
                    />
                </div>


                <div className="d-grid gap-2">
                    <button
                        type='submit'
                        onClick={handleSave}
                        className='btn btn-block btn-outline-info mt-4'
                        disabled={!todoOk()}
                    >
                        Guardar
                    </button>

                    <button
                        type='button'
                        onClick={closeModal}
                        className='btn btn-block btn-outline-danger mt-2'
                    >
                        Cerrar
                    </button>


                </div>

            </form>
        </Modal>

    )
}

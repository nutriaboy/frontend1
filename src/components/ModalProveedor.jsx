import Modal from 'react-modal/lib/components/Modal';

import '../css/modal.css';
import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';


export const ModalProveedor = () => {

    const {state, uiCloseModal} = useContext(UsuarioContext);
    const {modalOpen} = state;

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

    const handleSave = (e) => {
        e.preventDefault();
        
    }

    const closeModal = () => {
        uiCloseModal();
    } 
  return (
    <Modal
        isOpen={ modalOpen }
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        className="modal modal_2"
        closeTimeoutMS={ 200 }
        overlayClassName="modal-fondo"
      >
        <h1>Datos del Usuario</h1>
        <hr />

        <form 
            className='container'
        >
            <div className='form-group'>
                <label>Nombre</label>
                <input className='form-control' placeholder='Nombre' /*value={nombre} onChange={handleInputChange}*/ />
            </div>
            <div className='form-group'>
                <label>Correo</label>
                <input className='form-control' type="email" placeholder='Correo' /*value={correo} onChange={handleInputChange}*/ />
            </div>
            <div className='form-group'>
                <label>Teléfono</label>
                <input className='form-control' placeholder='Teléfono' /*value={telefono} onChange={handleInputChange}*/ />
            </div>
            <div className='form-group'>
                <label>Dirección</label>
                <input className='form-control' placeholder='Dirección' /*value={direccion} onChange={handleInputChange}*/ />
            </div>


            <div className="d-grid gap-2">
            <button 
                type='submit'
                onClick={handleSave}
                className='btn btn-block btn-outline-info mt-4'
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

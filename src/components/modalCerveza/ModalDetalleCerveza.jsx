import Modal from 'react-modal/lib/components/Modal';
import '../../css/modal.css';


export const ModalDetalleCerveza = () => {

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


  return (
    <Modal
            isOpen={modalOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={modalClose}
            style={customStyles}
            className="modal modal_2"
            closeTimeoutMS={200}
            overlayClassName="modal-fondo"
        >


            <h2 >Seleccionar Proveedor</h2>

            <hr />
            <form 
                className='container'
            >
                

                <div className="d-grid gap-2">

                    <button className='btn btn-outline-dark mt-3' >
                        Siguiente

                    </button>


                    <button className='btn btn-outline-danger ' >
                        Cerrar

                    </button>

                </div>

            </form>


        </Modal>
  )
}

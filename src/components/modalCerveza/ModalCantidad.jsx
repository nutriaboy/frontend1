import { useContext, useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { CervezaContext } from '../../context/CervezaContext';



export const ModalCantidad = ({ data }) => {

    const { stateCerveza, closeModalCantidadCerveza, openModalDetalleCerveza, crearDetalleCervezas } = useContext(CervezaContext);
    const { modalOpen3, tipoCerveza } = stateCerveza;
    const [idTipoCerveza, setIdTipoCerveza] = useState({})

    const [createDataCerveza, setCreateDataCerveza] = useState({
        nombre: '',
        marca: '',
        precioUnit: '',
        stock: '1',
    });
    const { nombre, marca, precioUnit, stock } = createDataCerveza;

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

    // const crearDetalleCerveza = (e) => {
    //     e.preventDefault();
    //     closeModalCantidadCerveza();
    //     data.cerveza = cervezaCreada.id;
    //     // !Funcion para insertar varios elementos al backend
    //     crearDetallesCer(cantidad, data);
    // }

    // const crearDetallesCer = (numRepeticion, ...rest) => {
    //     const [dataDetalleCerveza] = rest;
    //     console.log(numRepeticion);
    //     for (let i = 0; i < numRepeticion; i++) {
    //         crearDetalleCervezas(dataDetalleCerveza)
    //     }

    // }
    const crearCerveza = (e) => {
        e.preventDefault();
        console.log({nombre, marca, precioUnit, stock, idTipoCerveza})
        // TODO: Funcion para crear cerveza
    }


const returnModal = (e) => {
    e.preventDefault();
    openModalDetalleCerveza();
    closeModalCantidadCerveza();
}
const onChange = (e) => {
    setIdTipoCerveza(
        e.target.value
    )
}

const handleInputChange = ({ target }) => {
    setCreateDataCerveza({
        ...createDataCerveza,
        [target.name]: target.value
    })
}

const todoOk = () => {
    return ((typeof (idTipoCerveza) === "string"
     && idTipoCerveza !== '1' 
     && nombre.length > 0 
     && marca.length > 0 
     && precioUnit > 0
     && stock > 0) ? true : false)
}

return (
    <Modal
        isOpen={modalOpen3}
        // onAfterOpen={afterOpenModal}
        onRequestClose={modalClose}
        style={customStyles}
        className="modal modal_7"
        closeTimeoutMS={300}
        overlayClassName="modal-fondo"
    >

        <h2 >Crear Cerveza</h2>
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
                <label>Stock</label>
                <input
                    className='form-control'
                    type='number'
                    placeholder='Stock'
                    name='stock'
                    value={stock}
                    onChange={handleInputChange}
                />
            </div>

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

                <button className='btn btn-outline-dark mt-1' onClick={crearCerveza} disabled={!todoOk()}>
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

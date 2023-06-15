import Modal from 'react-modal/lib/components/Modal';
import '../../css/modal.css';
import { useContext, useEffect, useState } from 'react';
import { CervezaContext } from '../../context/CervezaContext';
import { ModalCantidad } from './ModalCantidad';


export const ModalDetalleCerveza = () => {

    const { stateCerveza, closeModalDetalleCerveza, openModalCantidadCerveza, } = useContext(CervezaContext);
    const { modalOpen2, cervezas, cleanInputModal2 } = stateCerveza;
    const [idTipoCerveza, setIdTipoCerveza] = useState({})
    const [dataDC, setDataDC] = useState({
        cantidad: '',
        idTipoC: '',
        precio: '0'
    });
    const { cantidad, idTipoC, precio } = dataDC;

    useEffect(() => {
        if (typeof (idTipoCerveza) === "string" && idTipoCerveza !== '1') {
            setDataDC({
                ...dataDC,
                idTipoC: idTipoCerveza
            });
        }
    }, [idTipoCerveza])

    useEffect(() => {

        if (cleanInputModal2) {
            setIdTipoCerveza({});
            setDataDC({
                cantidad: '',
                idTipoC: '',
                precio: '0'
            })
        }


    }, [cleanInputModal2])

    console.log(idTipoCerveza)


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

    const modalOpenCantidad = (e) => {
        e.preventDefault();
        closeModalDetalleCerveza();
        openModalCantidadCerveza();


        console.log(cantidad, idTipoC, precio);


    }

    const modalClose = (e) => {
        e.preventDefault();
        closeModalDetalleCerveza();
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
            <ModalCantidad data={dataDC} />
            <Modal
                isOpen={modalOpen2}
                // onAfterOpen={afterOpenModal}
                onRequestClose={modalClose}
                style={customStyles}
                className="modal modal_6"
                closeTimeoutMS={250}
                overlayClassName="modal-fondo"
            >


                <h2 >Agregar Detalle Compra</h2>

                <hr />
                <form
                    className='container'
                >


                    <div className='form-group'>
                        <label>Cantidad</label>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Cantidad'
                            name='cantidad'
                            value={cantidad}
                            onChange={handleInputChange}
                        />
                    </div>

                    <label>Cerveza</label>
                    <select
                        className="form-select"
                        onChange={onChange}
                        value={idTipoCerveza}
                    >
                        <option value={1}  >Elegir Tipo de Cerveza...</option>

                        {
                            cervezas.map((Cerv) =>
                                <option value={Cerv.id} key={Cerv.id}>{Cerv.nombre}</option>

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
                                name='precio'
                                value={precio}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>


                    <div className="d-grid gap-2">



                        <button className='btn btn-outline-primary mt-3'
                            onClick={() => console.log('crear Cerveza')}
                            style={(Object.entries(idTipoCerveza).length === 0 || idTipoCerveza === '1') ? null : { visibility: 'hidden' }}
                        >
                            Registrar Nueva Cerveza

                        </button>


                        <button className='btn btn-outline-dark ' disabled={!todoOk()} onClick={modalOpenCantidad}>
                            Siguiente
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

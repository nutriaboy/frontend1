import Modal from 'react-modal/lib/components/Modal';
import '../../css/modal.css';
import { useContext, useEffect, useState } from 'react';
import { CervezaContext } from '../../context/CervezaContext';
import { ModalCantidad } from './ModalCantidad';


export const ModalDetalleCerveza = () => {

    const { stateCerveza, closeModalDetalleCerveza, openModalCantidadCerveza, crearDetalleCompra } = useContext(CervezaContext);
    const { modalOpen2, cervezas, cleanInputModal2, compraCreada, selectCreateCerveza } = stateCerveza;
    const [idCerveza, setIdCerveza] = useState({})
    const [dataDC, setDataDC] = useState({
        cantidad: '',
        idTipoC: '',
        precio: '0'
    });
    const { cantidad, idTipoC, precio } = dataDC;

    useEffect(() => {
        if(Object.entries(selectCreateCerveza).length !== 0){
            setIdCerveza(selectCreateCerveza.id)
        }
    }, [selectCreateCerveza]);


    useEffect(() => {
        if (typeof (idCerveza) === "string" && idCerveza !== '1') {
            setDataDC({
                ...dataDC,
                idTipoC: idCerveza
            });
        }
    }, [idCerveza])

    useEffect(() => {
        if (cleanInputModal2) {
            setIdCerveza({});
            setDataDC({
                cantidad: '',
                idTipoC: '',
                precio: '0'
            })
        }


    }, [cleanInputModal2])



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

    const modalOpenCreateCerveza = (e) => {
        e.preventDefault();
        closeModalDetalleCerveza();
        openModalCantidadCerveza();
    }

    const modalClose = (e) => {
        e.preventDefault();
        closeModalDetalleCerveza();
        setTimeout(() => {
            setIdCerveza({})
        }, 200);

    }

    const handleInputChange = ({ target }) => {
        setDataDC({
            ...dataDC,
            [target.name]: target.value
        })
    }

    const onChange = (e) => {
        setIdCerveza(
            e.target.value
        )
    }

    const createDetalleCerveza = (e) => {
        e.preventDefault();
        const compraId = compraCreada.id;
        crearDetalleCompra({idCerveza, cantidad,precio, compraId});
        closeModalDetalleCerveza();

    }

    const dataStock = () => {
        const cervezaSeleccionada = cervezas.find((cerveza) => idCerveza === cerveza.id);
        if (cervezaSeleccionada) {
            return cervezaSeleccionada.stock;

        }
        return 0;
    }

    const todoOk = () => {
        return ((typeof (idCerveza) === "string" 
            && idCerveza !== '1'
            && cantidad > 0
            && precio > 0) ? true : false)
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
                            type='number'
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
                        value={idCerveza}
                    >
                        <option value={1}  >Elegir Cerveza...</option>

                        {
                            cervezas.map((Cerv) =>
                                <option value={Cerv.id} key={Cerv.id}>{Cerv.nombre} - {Cerv.marca}</option>

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


                        {
                            (Object.entries(idCerveza).length === 0 || idCerveza === '1')
                                ? (
                                    <button className='btn btn-outline-primary mt-3'
                                        onClick={modalOpenCreateCerveza}
                                    >
                                        Registrar Nueva Cerveza

                                    </button>
                                )
                                : (
                                    <button className='btn mt-3'
                                        disabled
                                        onClick={() => console.log('crear Cerveza')}
                                    >
                                        Stock Actual: {dataStock()} 

                                    </button>
                            )

                        }




                        <button className='btn btn-outline-dark ' disabled={!todoOk()} onClick={createDetalleCerveza}>
                            Crear Compra
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

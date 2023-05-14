import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { UsuarioContext } from '../context/UsuarioContext';
import Swal from 'sweetalert2';



export const Register = () => {

    const { register } = useContext(UsuarioContext);
    const [selectGenero, setSelectGenero] = useState('1')

    const [valuesInput, setValuesInput] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        password: '',
        telefono: '',
        direccion: '',
        genero: ''
    })
    const { nombre, apellido, correo, password, telefono, direccion, genero } = valuesInput;

    const navigate = useNavigate();

    useEffect(() => {
        if(selectGenero !== '1') {
            setValuesInput({
                ...valuesInput,
                genero: selectGenero
            })
        }
        if( selectGenero === '1'){
            setValuesInput({
                ...valuesInput,
                genero: ''
            })
        }
    }, [selectGenero])
    


    const handleRegister = async (e) => {
        e.preventDefault();

        const [msg, ok] = await register(nombre, apellido, correo, password, telefono, direccion, genero);
        if (!ok) {
            Swal.fire('Error', msg, 'error');
        } else {
            Swal.fire('Registrado', msg, 'success');
            navigate('/auth/login', {
                replace: true
            });
        }

    }
    const handleInputChange = ({ target }) => {

        setValuesInput({
            ...valuesInput,
            [ target.name ]: target.value
        })
    }

    const onChange = (e) => {
        setSelectGenero(
            e.target.value
        )
    }

    const todoOk = () => {
        return ((nombre.length > 1 && apellido.length > 1 && correo.length > 1 && password.length > 1 && telefono.length > 1 && direccion.length > 1 && genero !== '') ? true :false);
    }


    return (
        <>

            <form
                className="login100-form validate-form flex-sb flex-w"
                onSubmit={handleRegister}
            >

                <span className="login100-form-title p-b-32">
                    Registrar
                </span>
                <span className="txt1 p-b-11">
                    Nombre
                </span>
                <div className="wrap-input100 validate-input m-b-12">

                    <input className="input100"
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </div>

                <span className="txt1 p-b-11">
                    Apellido
                </span>
                <div className="wrap-input100 validate-input m-b-12">
                    <span className="btn-show-pass">
                        <i className="fa fa-eye"></i>
                    </span>

                    <input className="input100"
                        type="text"
                        name="apellido"
                        placeholder='Apellido'
                        value={apellido}
                        onChange={handleInputChange}
                    />

                    <span className="focus-input100"></span>
                </div>


                <span className="txt1 p-b-11">
                    Correo
                </span>
                <div className="wrap-input100 validate-input m-b-12">
                    <span className="btn-show-pass">
                        <i className="fa fa-eye"></i>
                    </span>

                    <input className="input100"
                        type="email"
                        name="correo"
                        placeholder='Correo'
                        value={correo}
                        onChange={handleInputChange}
                    />

                    <span className="focus-input100"></span>
                </div>

                <span className="txt1 p-b-11">
                    Contraseña
                </span>
                <div className="wrap-input100 validate-input m-b-12">
                    <span className="btn-show-pass">
                        <i className="fa fa-eye"></i>
                    </span>

                    <input className="input100"
                        type="password"
                        name="password"
                        placeholder='Contraseña'
                        value={password}
                        onChange={handleInputChange}
                    />

                    <span className="focus-input100"></span>
                </div>


                <span className="txt1 p-b-11">
                    Teléfono
                </span>
                <div className="wrap-input100 validate-input m-b-12" >
                    <span className="btn-show-pass">
                        <i className="fa fa-eye"></i>
                    </span>

                    <input className="input100"
                        type="text"
                        name="telefono"
                        placeholder='Teléfono'
                        value={telefono}
                        onChange={handleInputChange}
                    />

                    <span className="focus-input100"></span>
                </div>


                <span className="txt1 p-b-11">
                    Dirección
                </span>
                <div className="wrap-input100 validate-input m-b-12" >
                    <span className="btn-show-pass">
                        <i className="fa fa-eye"></i>
                    </span>

                    <input className="input100"
                        type="text"
                        name="direccion"
                        placeholder='Dirección'
                        value={direccion}
                        onChange={handleInputChange}
                    />

                    <span className="focus-input100"></span>
                </div>

                <span className="txt1 p-b-11">
                    Genero
                </span>
                <div className="wrap-input100 validate-input m-b-12" >

                    {/* <label>Proveedor</label> */}

                    <select
                        className="form-select input100-select"
                    //input100-select form-select
                    onChange={onChange}
                    value={selectGenero}
                    // defaultValue="DEFAULT"
                    >
                        <option value={1}  >Elegir Genero...</option>

                        <option value="M" >Masculino</option>
                        <option value="F" >Femenino</option>


                    </select>
                    {/* <span className="btn-show-pass">
                        <i className="fa fa-eye"></i>
                    </span>

                    <input className="input100"
                        type="text"
                        name="genero"
                        placeholder='Genero'
                        value={genero}
                        onChange={handleInputChange}
                    />
                */}

                    <span className="focus-input100"></span>
                </div>
                {/* ----------------------------------------------------- */}
                <div className="form-check">
                </div>
                {/* ----------------------------------------------------- */}

                <div>
                    <Link to="/auth/login" href="#" className="txt3">
                        Iniciar Sesión
                    </Link>
                </div>


                <div className="container-login100-form-btn">

                    <button
                        className="btn btn-dark btn-lg"
                        type='submit'
                        disabled={!todoOk()}
                    >
                        Guardar
                    </button>
                </div>
            </form>
            {/* <div id="dropDownSelect1"></div> */}

        </>
    )
}

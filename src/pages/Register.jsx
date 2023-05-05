import { Link } from "react-router-dom"
import { useForm } from "../hooks/useForm"


export const Register = () => {

    const [valuesInput, handleInputChange] = useForm({
        nombre: '',
        apellido: '',
        correo: '',
        password: '',
        telefono: '',
        direccion: '',
        genero: ''
    })
    const {
        nombre,
        apellido,
        correo,
        password,
        telefono,
        direccion,
        genero
    } = valuesInput;


    const handleRegister = (e) => {
        e.preventDefault();
        console.log(nombre,
            apellido,
            correo,
            password,
            telefono,
            direccion,
            genero);
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
                <div className="wrap-input100 validate-input m-b-12" data-validate="Username is required">

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
                <div className="wrap-input100 validate-input m-b-12" data-validate="Password is required">
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
                <div className="wrap-input100 validate-input m-b-12" data-validate="Password is required">
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
                <div className="wrap-input100 validate-input m-b-12" data-validate="Password is required">
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
                <div className="wrap-input100 validate-input m-b-12" data-validate="Password is required">
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
                <div className="wrap-input100 validate-input m-b-12" data-validate="Password is required">
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
                <div className="wrap-input100 validate-input m-b-12" data-validate="Password is required">
                    <span className="btn-show-pass">
                        <i className="fa fa-eye"></i>
                    </span>

                    <input className="input100"
                        type="text"
                        name="genero"
                        placeholder='Genero'
                        value={genero}
                        onChange={handleInputChange}
                    />

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
                    // disabled={!todoOk()}
                    >
                        Guardar
                    </button>
                </div>
            </form>
            {/* <div id="dropDownSelect1"></div> */}

        </>
    )
}

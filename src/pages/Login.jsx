import { useContext, useState } from 'react'
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';


export const Login = () => {

    const { login } = useContext(AuthContext);

    const [valuesInput, handleInputChange] = useForm({
        correo: '',
        password: '',
    })
    const { correo, password } = valuesInput;

    const [form, setForm] = useState({
        rememberme: true
    })


    const onClick = () => {
        setForm({
            ...form,
            rememberme: !form.rememberme
        })
    }


    const handleLogin = async (e) => {
        e.preventDefault();
        const [ok, msg] = await login(correo, password);
        if (!ok) {
            Swal.fire('Error', msg, 'error')
        }
    }

    const todoOk = () => {
        return (correo.length > 1 && password.length > 1) ? true : false;
    }


    return (
        <>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">

                        <form
                            className="login100-form validate-form flex-sb flex-w"
                            onSubmit={handleLogin}
                        >

                            <span className="login100-form-title p-b-32">
                                Inicio de Sesión
                            </span>
                            <span className="txt1 p-b-11">
                                Correo
                            </span>
                            <div className="wrap-input100 validate-input m-b-36" data-validate="Username is required">

                                <input className="input100"
                                    type="email"
                                    name="correo"
                                    placeholder="Email"
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
                            <div className="form-check flex-sb-m w-full p-b-48">
                                <div className="contact100-form-checkbox"
                                    onClick={onClick}
                                >

                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="rememberme"
                                        id="ckb1"
                                        checked={form.rememberme}
                                        readOnly
                                    />


                                    <label className="form-check-label label-checkbox100" >
                                        Recordarme
                                    </label>
                                </div>
                                <div>
                                    <a href="#" className="txt3">
                                        ¿Olvidó su contraseña?
                                    </a>
                                </div>
                            </div>
                            <div className="container-login100-form-btn">

                                <button
                                    className="btn btn-dark btn-lg"
                                    type='submit'
                                    disabled={!todoOk()}
                                >
                                    Inicias Sesión
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div id="dropDownSelect1"></div> */}

        </>
    )
}






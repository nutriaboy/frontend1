import React, { useState } from 'react'

export const Login = () => {

    const [form, setForm] = useState({
        correo: '',
        password: '',
        rememberme: true
    })
    

    const onChange = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const onClick = () => {
        setForm({
            ...form,
            rememberme: !form.rememberme
        })
    }


    const handleLogin = async(e) => {
        e.preventDefault();
        console.log(form);
    }


    return (
        <>

            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">

                        <form 
                            className="login100-form validate-form flex-sb flex-w"
                            onSubmit={ handleLogin }
                        >

                            <span className="login100-form-title p-b-32">
                                Account Login
                            </span>
                            <span className="txt1 p-b-11">
                                Username
                            </span>
                            <div className="wrap-input100 validate-input m-b-36" data-validate="Username is required">

                                <input className="input100"
                                       type="text"
                                       name="correo"
                                       placeholder="Email"
                                       value={ form.correo }
                                       onChange={ onChange }
                                />

                                <span className="focus-input100"></span>
                            </div>
                            <span className="txt1 p-b-11">
                                Password
                            </span>
                            <div className="wrap-input100 validate-input m-b-12" data-validate="Password is required">
                                <span className="btn-show-pass">
                                    <i className="fa fa-eye"></i>
                                </span>

                                <input className="input100" 
                                       type="password"
                                       name="password"
                                       placeholder='Contraseña'
                                       value={ form.password }
                                       onChange={ onChange }
                                />
                                
                                <span className="focus-input100"></span>
                            </div>
                            <div className="flex-sb-m w-full p-b-48">
                                <div className="contact100-form-checkbox"
                                     onClick={ onClick }
                                >

                                    <input className="input-checkbox100"
                                           type="checkbox"
                                           name="rememberme"
                                           id="ckb1"
                                           checked={ form.rememberme }
                                           readOnly
                                    />

                                    
                                     
      

                                    <label className="label-checkbox100" >
                                        Remember me
                                    </label>
                                </div>
                                <div>
                                    <a href="#" className="txt3">
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn"
                                        type='submit'
                                >
                                    Login
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






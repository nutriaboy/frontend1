import { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


export const Navbar = () => {

    const { logout, auth } = useContext(AuthContext);
    const [clic, setClic] = useState(false)

    const navigate = useNavigate();

    const eventoClick = (e) => {
        e.preventDefault();
        setClic(!clic);
    }

    const eventoOut = (e) => {
        setTimeout(() => {
            setClic(false);
        }, 250);
    }

    const handleLogout = () => {
        logout();
        localStorage.removeItem('token');
        navigate('/auth/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link
                    to="/"
                    className="navbar-brand"
                >
                    Inicio
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">
                        <NavLink
                            className={({ isActive }) => 'nav-item nav-link' + (isActive ? ' active' : '')}
                            to="/"
                        >
                            Cervezas
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => 'nav-item nav-link' + (isActive ? ' active' : '')}
                            to="/proveedores"
                        >
                            Proveedores
                        </NavLink>

                    </div>
                </div>


                <div className='order-3 dual-collapse2 d-flex me-3'>
                    <li className="nav-item dropdown mt-1" onMouseLeave={eventoOut}>
                        <a
                            className={'nav-item nav-link dropdown-toggle ' + (clic ? ' show text-light ' : 'text-white-50')}
                            href="#"
                            onClick={eventoClick}
                        >
                            Bienvenida/o   <span className={(clic ? ' text-info ' : '')}> {auth.name}</span>
                        </a>
                        <ul className={'dropdown-menu dropdown-menu-dark' + (clic ? ' show' : '')}>

                            <li><a
                                className="dropdown-item dropdown-best"
                                href="#"

                            >
                                Editar</a></li>
                            <li><button
                                className='dropdown-item dropdown-best'
                                onClick={handleLogout}

                            >
                                Cerrar Sesión
                            </button></li>
                        </ul>
                    </li>

                    {/* <ul className='navbar-nav ml-auto'>

                        <span className='nav-item nav-link text-info'>
                            {auth.name}
                        </span>


                    </ul> */}

                </div>

            </div>

        </nav>

    )
}

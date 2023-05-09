import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


export const Navbar = () => {

    const {logout, auth} = useContext(AuthContext);

    const navigate = useNavigate();

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
                            className={({isActive}) => 'nav-item nav-link' + (isActive ? ' active' : '')}
                            to="/"
                        >
                            Proveedores
                        </NavLink>

                        <NavLink
                            className={({isActive}) => 'nav-item nav-link' + (isActive ? ' active' : '')}
                            to="/otro"
                        >
                            Otro
                        </NavLink>
                    </div>
                </div>


                <div className='order-3 dual-collapse2 d-flex'>
                    <ul className='navbar-nav ml-auto'>
                        <span className='nav-item nav-link text-info'>
                            {auth.name}
                        </span>
                        <button 
                            className='nav-item nav-link btn-red'
                            onClick={handleLogout}
                        >
                            Cerrar Sesión
                        </button>

                    </ul>

                </div>

            </div>

        </nav>

    )
}

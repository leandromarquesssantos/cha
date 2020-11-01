import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './navbar.css';

function Navbar(){
    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg">
            <span className="navbar-brand text-white" font-weight-bold href="#">TITULO</span>
            <i className="fas fa-ticket-alt text-white fa-2x"></i>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars text-white"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="home">Home</Link>
                    </li>
                    {
                        useSelector(state => state.userLogged) < 1 ?
                        <Fragment>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">SignUp</Link>
                            </li>
                        </Fragment>
                        :
                        <Fragment>
                            <li className="nav-item">
                                <Link className="nav-link" to="/novo">Novo Chamado</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tickets/my">Meus Chamados</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={() => dispatch({type: 'LOG_OUT'})} >Sair</Link>
                            </li>
                        </Fragment>
                        
                    }
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;
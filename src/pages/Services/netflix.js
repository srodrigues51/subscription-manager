import React from "react";
import Sidebar from "../../components/sidebar";
import { Link } from "react-router-dom";

function Netflix() {
    return (
        <>
            <div className='nav-bar-fixed blue'>
                <nav>
                    <div className='nav-wrapper blue'>
                        <a id="brand-logo" href=" " className='brand-logo center '> Subscription Manager</a>
                        <a href="#!" className='sidenav-trigger show-on-large' data-target='slide-out'><i className='medium material-icons white-text'>menu</i></a>
                        <ul id="navbar-items" className="right hide-on-med-and-down">
                            <li><a href='#!' className='dropdown-trigger' data-target='dropdown1'><i className="large material-icons ">account_circle</i></a></li>
                            <ul id='dropdown1' className='dropdown-content container'>
                                <li><Link to='/profile'>Perfil</Link></li>
                                <li className="divider" tabindex="-1"></li>
                                <li><Link to='/'>Sair</Link></li>
                            </ul>
                        </ul>
                    </div>
                </nav>
            </div>
            <Sidebar />
            <div className="container">
                <h3 className="title"> Escolha um dos planos disponíveis para Netflix</h3>
            </div>
            <br></br>
            <br></br>
            <div className="container ">
                <ul className="collection">
                    <li className="collection-item">plano1 </li>
                    <li className="collection-item">plano 2</li>
                </ul>
            </div>
        </>
    );
}

export default Netflix;
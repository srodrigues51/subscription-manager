import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {

    return (
        <div className='container'>
            <ul id="nav-mobile" className="left hide-on-med-and-down ">
                <ul id="slide-out" className='sidenav blue lighten-5' >
                    <li className="divider" tabIndex="-1"></li>
                    <li><Link to="/subscripition">Assinaturas</Link></li>
                    <li className="divider" tabIndex="-1"></li>
                    <li><Link to="/payments">Pagamentos</Link></li>
                    <li className="divider" tabIndex="-1"></li>
                    <li><Link to="/notification">Notificações</Link></li>
                    <li className="divider" tabIndex="-1"></li>
                    <li><Link to="/profile">Perfil</Link></li>
                    <li className="divider" tabIndex="-1"></li>
                    <li><Link to="/home">Tela Inicial</Link></li>
                </ul>
            </ul>
        </div>

    );
}

export default Sidebar;
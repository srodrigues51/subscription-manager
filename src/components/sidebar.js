import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css";

function Sidebar() {

  useEffect(() => {
    M.AutoInit();
  }, [])

    return (
        <ul id="sidebar" className="sidenav blue lighten-5" >
            <li className="divider" tabIndex="-1"></li>
            <li><Link className="sidenav-close" to="/subscripition">Assinaturas</Link></li>
            <li className="divider" tabIndex="-1"></li>
            <li><Link className="sidenav-close" to="/payment">Pagamentos</Link></li>
            <li className="divider" tabIndex="-1"></li>
            <li><Link className="sidenav-close" to="/invite">Convites</Link></li>
            <li className="divider" tabIndex="-1"></li>
            <li><Link className="sidenav-close" to="/profile">Perfil</Link></li>
            <li className="divider" tabIndex="-1"></li>
            <li><Link className="sidenav-close" to="/home">Tela Inicial</Link></li>
        </ul>

    );
}

export default Sidebar;
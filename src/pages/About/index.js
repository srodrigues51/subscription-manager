import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='nav-bar-fixed'>
      <nav className='nav-container'>
        <div className='nav-wrapper blue'>
          <a id="brand-logo" href=" " className='brand-logo center'> Subscription Manager</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/register">Cadastrar</Link>
            </li>
            <li><Link to="/login">Entrar</Link></li>
          </ul>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to="/">Voltar</Link></li>
          </ul>
        </div>
      </nav>
      <div>
        <h1>TELA SOBRE</h1>
      </div>
    </div>

  );
}

export default About;

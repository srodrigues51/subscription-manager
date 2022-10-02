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
              <Link to="/about">Sobre</Link>
            </li>
            <li><Link to="/login">Entrar</Link></li>
          </ul>
        </div>
      </nav>
      <div className='container'>
        <br></br>
        <br></br>
        <br></br>
        <div clasName='row center' >
          <h5 className='header col s12 light'>Este é um site de compartilhamento e gerenciamento de contas e serviços entre usuários !</h5>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='container center'>
          <Link to="/register" className="waves-effect waves-light btn-large">Cadastrar Gratuitamente</Link>
        </div>
        <br>
        </br>
      </div>
    </div>

  );
}

export default About;

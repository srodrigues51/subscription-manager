import React from 'react';
import { Link } from 'react-router-dom';


function Initialpage() {
  return (
    <div className='nav-bar-fixed'>
      <nav className='nav-container'>
        <div className='nav-wrapper blue'>
          <a id="brand-logo" href="/" className='brand-logo center'> Subscription Manager</a>
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
          <h5 className='header col s12 light'>Cansado de não ter onde assistir seus filmes e séries favoritas? Cadastre-se agora !</h5>
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

export default Initialpage;
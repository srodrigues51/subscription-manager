import React from 'react';
import { Link } from 'react-router-dom';


function Register() {
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
          <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to="/">Voltar</Link></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <form>
          <label>Seu e-mail</label>
          <input type="text" id="remail" name="remail"></input>
          <label>Informe seu nome</label>
          <input type="text" id="rfname" name="rfname"></input>
          <label>Agora seu sobrenome</label>
          <input type="text" id="rlname" name="rlname"></input>
          <label>Crie uma senha</label>
          <input type="text" id="password" name="password"></input>
          <label>Confirme sua senha</label>
          <input type="text" id="cpassword" name="cpassword"></input>
        </form>
        <button type="submit" className="waves-effect waves-light btn"> Cadastrar </button>
      </div>
    </div>

  );
}

export default Register;
